import prismaClient from '../../prisma';

class ListAllSalesformService {
  async execute() {
    return await prismaClient.salesForm.findMany({

      select: {
        collaborator: {
          select: { id: true, name: true, type: true }
        },
        id: true,
        createdAt: true,
        state: true,
        formPayment: true,

        client: {
          select: { name: true }
        },
        budget: { select: { product: { select: { _count: true } }, unit: true, total:true } }

      },
      orderBy: {
        createdAt: 'desc' // ou 'desc' para ordenar em ordem decrescente
      }
    });
  }
}

export { ListAllSalesformService };