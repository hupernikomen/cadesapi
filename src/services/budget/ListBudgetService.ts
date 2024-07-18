import prismaClient from '../../prisma';

interface BudgetRquest {
  salesformID: string;
}

// Lista Orçamentos com base no numero do Pedido
class ListBudgetService {
  async execute({ salesformID }: BudgetRquest) {
    return await prismaClient.budget.findMany({
      where: {
        salesformID: salesformID
      },
      select: {
        product: true,
        id: true,
        createdAt: true,
        unit: true,
        total:true,
        amount: true,
      },
      orderBy: {
        createdAt: 'desc' // ou 'desc' para ordenar em ordem decrescente
      }
    });
  }
}

export { ListBudgetService };