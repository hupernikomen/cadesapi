import prismaclient from "../../prisma";

interface DadosDaOrdemDeCompra {
    ordemDeCompraID: string;
}

class ExcluiOrdemDeCompraServico {
    async execute({ ordemDeCompraID }: DadosDaOrdemDeCompra) {

        const ordemDeCompraEncontrada = await prismaclient.ordemDeCompra.findFirst({
            where: {
                id: ordemDeCompraID
            }
        })

        if (!ordemDeCompraEncontrada) {
            throw new Error("Pedido não foi encontrado ou não existe");
        }


        const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findFirst({
            where: {
                ordemDeCompraID: ordemDeCompraID
            }
        })


        if (!itemDoPedidoEncontrado && !!ordemDeCompraEncontrada) {
            await prismaclient.ordemDeCompra.delete({
                where: {
                    id: ordemDeCompraID
                }
            })
        }



    }
}

export { ExcluiOrdemDeCompraServico }