import prismaClient from '../../prisma';

class ListarProdutosServico {
  async execute() {
    return await prismaClient.produto.findMany();
  }
}

export { ListarProdutosServico };