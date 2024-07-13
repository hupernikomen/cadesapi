import prismaclient from "../../prisma";

class DashboardServico {
    async execute(user_id: string) {

        const usuario = await prismaclient.usuario.findFirst({
            where: {
                id: user_id
            },
            select:{
                id:true,
                tipo:true,
                nome:true,
            }
        })

        return usuario
    }
}

export { DashboardServico }