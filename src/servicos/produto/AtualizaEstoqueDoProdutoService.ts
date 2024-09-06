import prismaclient from '../../prisma';

interface StockRequest {
    ordemDeCompraID: string;
}

class AtualizaEstoqueDoProdutoService {
    async execute({ ordemDeCompraID }: StockRequest) {

        try {

            const ordemDeCompraEncontrado = await prismaclient.ordemDeCompra.findFirst({
                where: {
                    id: ordemDeCompraID
                }
            })

            if (!ordemDeCompraEncontrado) {
                throw new Error(`Ordem de compra não encontrada`);
            }

            switch (ordemDeCompraEncontrado.estado) {

                case 'Aberto':
                    const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({
                        where: {
                            ordemDeCompraID: ordemDeCompraID
                        }
                    })

                    await prismaclient.ordemDeCompra.update({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Criado'
                        }
                    })


                    for (const item of itemDoPedidoEncontrado) {
                        const produtoEncontrado = await prismaclient.produto.findFirst({
                            where: {
                                id: item.produtoID
                            }
                        })


                        await prismaclient.produto.update({
                            where: {
                                id: produtoEncontrado.id
                            },
                            data: {
                                reservado: produtoEncontrado.reservado + item.quantidade,
                            }
                        })
                    }

                    break;

                case 'Criado':
                    await prismaclient.ordemDeCompra.updateMany({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Separado',
                            atualizadoEm: new Date()
                        }
                    })
                    break;

                case 'Separado':
                    await prismaclient.ordemDeCompra.updateMany({
                        where: {
                            id: ordemDeCompraID
                        },
                        data: {
                            estado: 'Entregue',
                            atualizadoEm: new Date()
                        }
                    })

                    const _itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({
                        where: {
                            ordemDeCompraID: ordemDeCompraID
                        }
                    })

                    for (const item of _itemDoPedidoEncontrado) {
                        const produtoEncontrado = await prismaclient.produto.findFirst({ where: { id: item.produtoID } })

                        if (!produtoEncontrado) {
                            throw new Error(`Produto não encontrado`);
                        }

                        await prismaclient.produto.updateMany({
                            where: {
                                id: produtoEncontrado.id
                            },
                            data: {
                                saida: produtoEncontrado.saida + item.quantidade,
                                reservado: produtoEncontrado.reservado - item.quantidade
                            }
                        })
                    }

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