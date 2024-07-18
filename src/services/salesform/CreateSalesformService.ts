import prismaclient from "../../prisma";

interface SalesformRequest {
    clientID: string;
    collaboratorID: string,
    formPayment: string
}

class CreateSalesformService {
    async execute({ clientID, collaboratorID, formPayment }: SalesformRequest) {

        const _registerclient = await prismaclient.client.findFirst({
            where: {
                id: clientID
            }
        })

        if (!_registerclient) {
            throw new Error("Cliente não encontrado");
        }


        const salesform = await prismaclient.salesForm.create({
            data: {
                clientID,
                collaboratorID,
                formPayment
            }
        })

        return salesform
    }
}

export { CreateSalesformService }