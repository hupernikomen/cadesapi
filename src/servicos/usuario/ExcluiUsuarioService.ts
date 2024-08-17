import prismaclient from "../../prisma";

interface DadosDoUsuario {
    usuarioID: string;
}

class ExcluiUsuarioService {
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

export { ExcluiUsuarioService }