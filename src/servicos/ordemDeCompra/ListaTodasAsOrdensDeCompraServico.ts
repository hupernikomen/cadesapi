import prismaClient from '../../prisma';

class ListaTodasAsOrdensDeCompraServico {
  async execute() {

    const ordemDeCompra = await prismaClient.ordemDeCompra.findMany({

      select: {
        usuario: {
          select: { id: true, nome: true, cargo: true }
        },
        id: true,
        criadoEm: true,
        atualizadoEm:true,
        estado: true,
        formaDePagamento: true,
        observacao: true,
        tempoDePagamento:true,
        valorAdiantado:true,
        valorPago:true,
        cliente: {
          select: { nome: true }
        },

        itemDoPedido: { select: { produto: { select: { _count: true } }, valorUnitario: true, total: true } },
      },
      // orderBy: {
      //   criadoEm: 'desc' // ou 'desc' para ordenar em ordem decrescente
      // }
    });


    return ordemDeCompra
    

  }
}

export { ListaTodasAsOrdensDeCompraServico };