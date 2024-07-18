import prismaclient from "../../prisma";

interface BudgetRequest {
    amount: number;
    salesformID: string;
    productID: string
}

class CreateBudgetService {
    async execute({ amount, salesformID, productID }: BudgetRequest) {

        const product = await prismaclient.product.findFirst({
            where: {
                id: productID
            }
        })

        if (!product) {
            throw new Error("Produto não cadastrado");
        }

        if (product.stock < (product.out + amount)) {
            throw new Error("Estoque Insuficiente");
        }


        const budget = await prismaclient.budget.create({
            data: {
                amount,
                productID: productID,
                salesformID,
                unit: parseFloat(product.valueResale.replace(',', '.')),
                total: parseFloat(product.valueResale.replace(',', '.')),
            }
        })

        return budget
    }
}

export { CreateBudgetService }