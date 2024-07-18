import prismaclient from "../../prisma";

interface BudgetRequest {
    budgetID: string;
}

class DelBudgetService {
    async execute({ budgetID }: BudgetRequest) {


        const budget = await prismaclient.budget.findFirst({
            where: {
                id: budgetID
            }
        })


        if (budget) {

            await prismaclient.budget.delete({
                where: {
                    id: budgetID
                }
            })
        }



    }
}

export { DelBudgetService }