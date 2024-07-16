import prismaclient from "../../prisma";

interface SalesformRequest {
    salesformID: string;
    state: string
}

class PutSalesformService {
    async execute({ salesformID, state }: SalesformRequest) {

        await prismaclient.salesForm.updateMany({
            where: {
                id: salesformID
            },
            data: {
                state: state
            }
        })
    }
}

export { PutSalesformService }