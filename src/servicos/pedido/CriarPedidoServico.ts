import prismaclient from "../../prisma";

interface PedidoRequest {
    clienteId: string;
    usuarioId: string
}

class CriarPedidoServico {
    async execute({ clienteId, usuarioId }: PedidoRequest) {

        const existe = await prismaclient.cliente.findFirst({
            where: {
                id: clienteId
            }
        })

        if (!existe) {
            throw new Error("Cliente não encontrado");
        }

        
        const pedido = await prismaclient.pedido.create({
            data: {
                clienteId,
                usuarioId
            }
        })

        return pedido
    }
}

export { CriarPedidoServico }