import prismaClient from '../../prisma';

class ListaCorServico {
  async execute() {
    return await prismaClient.cor.findMany({
      select: {
        id: true,
        codigo: true,
        nome: true,
        produto: { select: { estoque: true, saida: true } }
      }
    });
  }
}

export { ListaCorServico };