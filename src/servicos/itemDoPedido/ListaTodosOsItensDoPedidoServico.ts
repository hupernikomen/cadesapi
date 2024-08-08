import prismaClient from '../../prisma';

interface DadosDoItemDoPedido {
  ordemDeCompraID: string;
}

class ListaTodosOsItensDoPedidoServico {
  async execute({ ordemDeCompraID }: DadosDoItemDoPedido) {

    const itens = await prismaClient.itemDoPedido.findMany({
      where: {
        ordemDeCompraID: ordemDeCompraID,
      },
    })

    await Promise.all(itens.map(async (item) => {
      if (item.quantidade === 0) {
        await prismaClient.itemDoPedido.delete({
          where: {
            id: item.id
          }
        })
      }
    }));

    const pedidoEncontrado = await prismaClient.itemDoPedido.findMany({
      where: {
        ordemDeCompraID: ordemDeCompraID,
      },
      select: {
        produto: true,
        id: true,
        criadoEm: true,
        valorUnitario: true,
        total: true,
        quantidade: true,
      },
      orderBy: {
        criadoEm: 'desc' // ou 'desc' para ordenar em ordem decrescente
      }
    });

    return pedidoEncontrado
  }
}

export { ListaTodosOsItensDoPedidoServico };