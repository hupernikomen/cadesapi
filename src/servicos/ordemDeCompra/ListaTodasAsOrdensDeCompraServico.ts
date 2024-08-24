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
        atualizadoEm: true,
        estado: true,
        formaDePagamento: true,
        totalDaNota: true,
        observacao: true,
        tempoDePagamento: true,
        valorAdiantado: true,
        valorPago: true,
        cliente: { select: { nome: true, bairro: true, cidade: true, id: true, cpf_cnpj: true, estado: true, dataNascimento: true, endereco: true, whatsapp: true, CEP: true } },
        desconto: true,
        itemDoPedido: { select: { quantidade: true, produto: { select: { _count: true } }, valorUnitario: true } },
      },
      // orderBy: {
      //   criadoEm: 'desc' // ou 'desc' para ordenar em ordem decrescente
      // }
    });


    return ordemDeCompra


  }
}

export { ListaTodasAsOrdensDeCompraServico };