import prismaclient from "../../prisma";

interface DeletaPedidoRequest {
    salesformID: string;
}

class DelSalesformService {
    async execute({ salesformID }: DeletaPedidoRequest) {

        const _registerSalesform = await prismaclient.salesForm.findFirst({
            where: {
                id: salesformID
            }
        })

        if (_registerSalesform) {
            await prismaclient.salesForm.delete({
                where: {
                    id: salesformID
                }
            })
        }
    }
}

export { DelSalesformService }