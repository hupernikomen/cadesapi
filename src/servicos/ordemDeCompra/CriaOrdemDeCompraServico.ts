import prismaclient from "../../prisma";

interface DadosDaCompra {
    clienteID: string;
    usuarioID: string,
    formaDePagamento: string,
    desconto: number
}

class CriaOrdemDeCompraServico {
    async execute({ clienteID, usuarioID, formaDePagamento, desconto }: DadosDaCompra) {

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
                formaDePagamento,
                desconto
            },

        })

        return ordemDeCompraCriada
    }
}

export { CriaOrdemDeCompraServico }