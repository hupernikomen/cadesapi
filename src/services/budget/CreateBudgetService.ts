import prismaclient from "../../prisma";

interface BudgetRequest {
    amount: number;
    salesformID: string;
    ref: string,
    color: string;
    size: string
}

class CreateBudgetService {
    async execute({ amount, salesformID, ref, color, size }: BudgetRequest) {

        const product = await prismaclient.product.findFirst({
            where: {
                ref: ref,
                color: color,
                size: size
            }
        })

        if (!product) {
            throw new Error("Produto não cadastrado");
        }

        if (product.add < (product.out + amount)) {
            throw new Error("Estoque Insuficiente");
        }


        const budget = await prismaclient.budget.create({
            data: {
                ref: ref,
                amount,
                productID: product.id,
                salesformID,
                price: product.valueResale,
                color,
                size
            }
        })

        return budget
    }
}

export { CreateBudgetService }