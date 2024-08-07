import prismaClient from '../../prisma';

class ListaTodosOsProdutosServico {
  async execute() {
    return await prismaClient.produto.findMany();
  }
}

export { ListaTodosOsProdutosServico };