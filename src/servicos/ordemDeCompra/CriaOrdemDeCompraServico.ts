import prismaclient from "../../prisma";

interface DadosDaCompra {
    clienteID: string;
    usuarioID: string,
    formaDePagamento: string,
    desconto: number,
    tipo: string
}

class CriaOrdemDeCompraServico {
    async execute({ clienteID, usuarioID, formaDePagamento, desconto, tipo }: DadosDaCompra) {

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
                desconto,
                tipo
            },

        })

        return ordemDeCompraCriada
    }
}

export { CriaOrdemDeCompraServico }