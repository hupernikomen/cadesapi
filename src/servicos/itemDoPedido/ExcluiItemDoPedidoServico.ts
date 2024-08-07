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
    }
}

export { ExcluiItemDoPedidoServico }