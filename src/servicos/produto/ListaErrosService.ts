import prismaClient from '../../prisma';

class ListaErrosService {
  async execute() {
    return await prismaClient.produto.findMany({
      where: {
        OR: [
          { saida: { lt: 0 } },
          { estoque: { lt: 0 } },
          { reservado: { lt: 0 } },
        ],
      },
      select: {
        id: true,
        referencia: true,
        saida: true,
        reservado: true,
        estoque: true,
        cor: { select: { nome: true } },
        tamanho:true
      }
    });
  }
}

export { ListaErrosService };