import prismaclient from "../../prisma";

interface DeletaPedidoRequest {
    salesformID: string;
}

class DelSalesformService {
    async execute({ salesformID }: DeletaPedidoRequest) {


        const budget = await prismaclient.budget.findFirst({
            where: {
                salesformID: salesformID
            }
        })


        if (!budget) {

            await prismaclient.salesForm.delete({
                where: {
                    id: salesformID
                }
            })
        }



    }
}

export { DelSalesformService }