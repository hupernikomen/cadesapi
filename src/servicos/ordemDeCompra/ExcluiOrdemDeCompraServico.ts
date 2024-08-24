import prismaclient from "../../prisma";

interface DadosDaOrdemDeCompra {
    ordemDeCompraID: string;
}

class ExcluiOrdemDeCompraServico {
    async execute({ ordemDeCompraID }: DadosDaOrdemDeCompra) {


        const itensDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({
            where:{
                ordemDeCompraID: ordemDeCompraID
            }
        })

        itensDoPedidoEncontrado.forEach(async(item) => {
            try {
                await prismaclient.itemDoPedido.delete({
                    where: {
                        id: item.id,
                        quantidade: 0
                    }
                })
            } catch (error) {
                console.log(error.response);
                
            }
          
        })


        await prismaclient.ordemDeCompra.delete({
            where: {
                id: ordemDeCompraID
            }
        })

    }
}

export { ExcluiOrdemDeCompraServico }