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
                productID: productID
            }
        })

        if (!_budget) {
            throw new Error("Item não encontrado");
            
        }

        await prismaclient.budget.updateMany({
            where: {
                id: budgetID,
                productID: productID
            },
            data: {
                amount: amount
            }
        })


    }
}

export { UpdateBudgetService }