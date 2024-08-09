import prismaClient from '../../prisma';

class ListaCorServico {
  async execute() {
    return await prismaClient.cor.findMany();
  }
}

export { ListaCorServico };