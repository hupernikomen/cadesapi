import prismaClient from '../../prisma';

class ListaPagamentosServico {
  async execute() {

    const ordemDeCompra = await prismaClient.pagamento.findMany();

    return ordemDeCompra


  }
}

export { ListaPagamentosServico };