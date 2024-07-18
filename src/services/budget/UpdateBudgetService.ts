import prismaclient from "../../prisma";

interface BudgetRequest {
    amount: number;
    productID: string,
    budgetID: string
}

// Movimentação para retirada definitiva do estoque
class UpdateBudgetService {
    async execute({ amount, productID, budgetID }: BudgetRequest) {

        // BUSCA PEDIDO INFORMADO
        const _budget = await prismaclient.budget.findFirst({
            where: {
                id: budgetID,
            }
        })

        if (!_budget) {
            throw new Error("Item não encontrado");

        }

        await prismaclient.budget.updateMany({
            where: {
                id: budgetID,
            },
            data: {
                productID: productID,
                amount: amount,
                total: amount * _budget.unit
            }
        })


    }
}

export { UpdateBudgetService }