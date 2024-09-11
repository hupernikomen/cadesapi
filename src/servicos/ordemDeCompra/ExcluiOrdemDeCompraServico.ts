import prismaclient from "../../prisma";

interface DadosDaOrdemDeCompra {
    ordemDeCompraID: string;
}

class ExcluiOrdemDeCompraServico {
    async execute({ ordemDeCompraID }: DadosDaOrdemDeCompra) {
      const itensDoPedidoEncontrado = await prismaclient.itemDoPedido.findMany({
        where: {
          ordemDeCompraID: ordemDeCompraID
        }
      })
  
      if (!itensDoPedidoEncontrado) {
        throw new Error("Nenhum item foi encontrado")
      }
  
      itensDoPedidoEncontrado.forEach(async (item) => {
        try {
          const itemExists = await prismaclient.itemDoPedido.findFirst({
            where: {
              id: item.id
            }
          })
  
          if (itemExists) {
            await prismaclient.itemDoPedido.delete({
              where: {
                id: item.id,
                quantidade: 0
              }
            })
          }
        } catch (error) {
          console.log(error.response)
        }
      })
  
      const ordemDeCompraExists = await prismaclient.ordemDeCompra.findFirst({
        where: {
          id: ordemDeCompraID
        }
      })
  
      if (ordemDeCompraExists) {
        await prismaclient.ordemDeCompra.delete({
          where: {
            id: ordemDeCompraID
          }
        })
      }
    }
  }

export { ExcluiOrdemDeCompraServico }