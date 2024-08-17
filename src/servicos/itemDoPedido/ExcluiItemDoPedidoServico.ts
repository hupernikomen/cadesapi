import prismaclient from "../../prisma";

interface DadosDoItemDoPedido {
    itemDoPedidoID: string;
}

class ExcluiItemDoPedidoServico {
    async execute({ itemDoPedidoID }: DadosDoItemDoPedido) {

        const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findFirst({
            where: {
                id: itemDoPedidoID
            }
        })

        if (itemDoPedidoEncontrado) {
            await prismaclient.itemDoPedido.delete({
                where: {
                    id: itemDoPedidoID
                }
            })
        }

        const ordemDeCompraEncontrada = await prismaclient.ordemDeCompra.findFirst({
            where: {
                id: itemDoPedidoEncontrado.ordemDeCompraID
            }
        })

        await prismaclient.ordemDeCompra.updateMany({
            where: {
                id: itemDoPedidoEncontrado.ordemDeCompraID
            },
            data: {
                totalDaNota: ordemDeCompraEncontrada.totalDaNota -  itemDoPedidoEncontrado.valorUnitario,
            }
        })
    }
}

export { ExcluiItemDoPedidoServico }