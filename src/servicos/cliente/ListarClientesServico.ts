import prismaClient from '../../prisma';

class ListarClientesServico {
  async execute() {
    return await prismaClient.cliente.findMany();
  }
}

export { ListarClientesServico };