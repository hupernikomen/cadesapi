import prismaClient from '../../prisma';

class ListaTodosOsClientesService {
  async execute() {
    return await prismaClient.cliente.findMany();
  }
}

export { ListaTodosOsClientesService };