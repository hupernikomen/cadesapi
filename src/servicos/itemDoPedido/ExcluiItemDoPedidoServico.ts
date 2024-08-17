import prismaclient from "../../prisma";

interface DadosDoUsuario {
    usuarioID: string;
}

class ExcluiItemDoPedidoServico {
    async execute({ usuarioID }: DadosDoUsuario) {

        const itemDoPedidoEncontrado = await prismaclient.usuario.findFirst({
            where: {
                id: usuarioID
            }
        })

        if (itemDoPedidoEncontrado) {
            await prismaclient.usuario.delete({
                where: {
                    id: usuarioID
                }
            })
        }

    }
}

export { ExcluiItemDoPedidoServico }