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
        color: true,
        createdAt: true,
        price: true,
        amount: true,
        size: true,
        ref: true,
      }
    });
  }
}

export { ListBudgetService };