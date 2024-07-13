import prismaClient from '../../prisma';

class ListaPedidosServico {
  async execute() {
    return await prismaClient.pedido.findMany({

      select: {
        Usuario: {
          select: { id: true, nome: true, tipo: true }
        },
        id: true,
        createdAt: true,
        status: true,
        Cliente: {
          select: { nome: true }
        }

      },
      orderBy: {
        createdAt: 'desc' // ou 'desc' para ordenar em ordem decrescente
      }
    });
  }
}

export { ListaPedidosServico };