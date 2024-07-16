import prismaClient from '../../prisma';

class ListAllClientsService {
  async execute() {
    return await prismaClient.client.findMany();
  }
}

export { ListAllClientsService };