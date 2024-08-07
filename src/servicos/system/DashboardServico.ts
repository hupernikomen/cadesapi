import prismaclient from "../../prisma";

class DashboardServico {
    async execute(user_id: string) {

        const usuarioEncontrado = await prismaclient.usuario.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                cargo: true,
                nome: true,
            }
        })

        return usuarioEncontrado
    }
}

export { DashboardServico }