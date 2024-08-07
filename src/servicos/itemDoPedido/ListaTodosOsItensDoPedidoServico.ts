import prismaClient from '../../prisma';

interface DadosDoItemDoPedido {
  ordemDeCompraID: string;
}

class ListaTodosOsItensDoPedidoServico {
  async execute({ ordemDeCompraID }: DadosDoItemDoPedido) {


    const pedidoEncontrado = await prismaClient.itemDoPedido.findMany({
      
      where: {
        ordemDeCompraID: ordemDeCompraID,
        quantidade: { gt: 0 } // filter items with quantidade > 0;
      },
      select: {
        produto: true,
        id: true,
        criadoEm: true,
        valorUnitario: true,
        total:true,
        quantidade: true,
      },
      orderBy: {
        criadoEm: 'desc' // ou 'desc' para ordenar em ordem decrescente
      }
    });

    pedidoEncontrado.forEach(async(item) => {
      if(item.quantidade === 0) {
        await prismaClient.itemDoPedido.delete({
          where: {
            id: item.id
          }
        })
      }
    });
    

    return pedidoEncontrado
  }
}

export { ListaTodosOsItensDoPedidoServico };