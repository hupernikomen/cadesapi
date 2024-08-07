import prismaclient from "../../prisma";

interface StockRequest {
    ordemDeCompraID: string;
}

class AtualizaEstoqueDoProdutoService {
    async execute({ ordemDeCompraID}: StockRequest) {

        const ordemDeCompraEncontrado = await prismaclient.ordemDeCompra.findFirst({ where: { id: ordemDeCompraID } })

        switch (ordemDeCompraEncontrado.estado) {
            case "Criado":
                await prismaclient.ordemDeCompra.updateMany({ where: { id: ordemDeCompraID },
                    data: { estado: "Separado", atualizadoEm: new Date()  }
                })
                break;

            case "Separado":
                await prismaclient.ordemDeCompra.updateMany({ where: { id: ordemDeCompraID },
                    data: { estado: "Entregue", atualizadoEm: new Date()  }
                })

                const _itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({ where: { ordemDeCompraID: ordemDeCompraID } })

             _itemDoPedidoEncontrado.map(async (item) => {
                    const produtoEncontrado = await prismaclient.produto.findFirst({  where: { id: item.produtoID } })
    
                    await prismaclient.produto.updateMany({ where: { id: produtoEncontrado.id },
                        data: {
                            saida: produtoEncontrado.saida + item.quantidade,
                            reservado: produtoEncontrado.reservado - item.quantidade
                        }
                    })
                })
    
                break;

            case "Aberto":


                const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({ where: { ordemDeCompraID: ordemDeCompraID } })

                await prismaclient.ordemDeCompra.updateMany({ where: { id: ordemDeCompraID },
                    data: { estado: "Criado", valorPago: itemDoPedidoEncontrado.reduce((acc, current) => acc + current.total, 0), atualizadoEm: new Date() }
                })
                
    
                itemDoPedidoEncontrado.map(async (item) => {
                    const produtoEncontrado = await prismaclient.produto.findFirst({ where: { id: item.produtoID } })
    
                    await prismaclient.produto.updateMany({ where: { id: produtoEncontrado.id },
                        data: {
                            reservado: produtoEncontrado.reservado + item.quantidade,
                        }
                    })
                })
    
                break;
        
            default:
                break;
        }
    }
}

export { AtualizaEstoqueDoProdutoService }