import prismaclient from "../../prisma";

class DashboardServico {
    async execute(user_id: string) {

        const collaborator = await prismaclient.collaborator.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                type: true,
                name: true,
            }
        })

        return collaborator
    }
}

export { DashboardServico }