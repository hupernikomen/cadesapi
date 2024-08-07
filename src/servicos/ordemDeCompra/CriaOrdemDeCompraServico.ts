import prismaclient from "../../prisma";

interface SalesformRequest {
    clienteID: string;
    usuarioID: string,
    formaDePagamento: string
}

class CriaOrdemDeCompraServico {
    async execute({ clienteID, usuarioID, formaDePagamento }: SalesformRequest) {

        const clienteEncontrado = await prismaclient.cliente.findFirst({
            where: {
                id: clienteID
            }
        })

        if (!clienteEncontrado) {
            throw new Error("Cliente não encontrado");
        }


        const ordemDeCompraCriada = await prismaclient.ordemDeCompra.create({
            data: {
                clienteID,
                usuarioID,
                formaDePagamento
            },

        })

        return ordemDeCompraCriada
    }
}

export { CriaOrdemDeCompraServico }