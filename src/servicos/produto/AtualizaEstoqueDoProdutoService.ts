import prismaclient from '../../prisma';

interface StockRequest {
    ordemDeCompraID: string;
}

class AtualizaEstoqueDoProdutoService {
    async execute({ ordemDeCompraID }: StockRequest) {

        try {
            // CAPTURA ORDEM DE COMPRA
            const ordemDeCompraEncontrado = await prismaclient.ordemDeCompra.findFirst({
                where: {
                    id: ordemDeCompraID
                }
            })

            // VERIFICA SE ORDEM DE COMPRA EXISTE
            if (!ordemDeCompraEncontrado) {
                throw new Error(`Ordem de compra não encontrada`);
            }

            const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({
                where: {
                    ordemDeCompraID: ordemDeCompraID
                }
            })
            // SWITCH DE ESTADO DA ORDEM DE COMPRA 
            switch (ordemDeCompraEncontrado.estado) {

                case 'Aberto':
                    await prismaclient.ordemDeCompra.update({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Processando'
                        }
                    })
                    break;


                case 'Processando':
                // case 'Criado': // TEMPORARIO
                    for (const item of itemDoPedidoEncontrado) {

                        const { id, produtoID, quantidade } = item

                        await prismaclient.itemDoPedido.update({
                            where: {
                                id: id
                            },
                            data: {
                                quantidade: quantidade,
                            }
                        })

                        const produtoEncontrado = await prismaclient.produto.findFirst({
                            where: {
                                id: produtoID
                            }
                        })

                        // RESERVA DE PEDIDO
                        await prismaclient.produto.update({
                            where: {
                                id: produtoID
                            },
                            data: {
                                reservado: produtoEncontrado.reservado + quantidade,
                            }
                        })
                    }

                    await prismaclient.ordemDeCompra.updateMany({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Embalado',
                            atualizadoEm: new Date()
                        }
                    })
                    break;




                case 'Embalado':
                    for (const item of itemDoPedidoEncontrado) {
                        const { produtoID, quantidade } = item

                        const produtoEncontrado = await prismaclient.produto.findFirst({
                            where: {
                                id: produtoID
                            }
                        })

                        if (!produtoEncontrado) {
                            throw new Error(`Produto não encontrado`);
                        }

                        await prismaclient.produto.updateMany({
                            where: {
                                id: produtoID
                            },
                            data: {
                                saida: produtoEncontrado.saida + quantidade,
                                reservado: produtoEncontrado.reservado - quantidade
                            }
                        })
                    }

                    await prismaclient.ordemDeCompra.updateMany({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Entregue',
                            atualizadoEm: new Date()
                        }
                    })

                    break;

                default:
                    break;
            }

        } catch (error) {
            console.error(error);
            throw new Error(`Erro ao atualizar estoque: ${error.message}`)
        }
    }
}

export { AtualizaEstoqueDoProdutoService }