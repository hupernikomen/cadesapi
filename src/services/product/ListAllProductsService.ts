import prismaClient from '../../prisma';

class ListAllProductsService {
  async execute() {
    return await prismaClient.product.findMany();
  }
}

export { ListAllProductsService };