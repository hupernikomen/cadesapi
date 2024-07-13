import { Request, Response } from "express";

import { DashboardServico } from "../../servicos/sistema/DashboardServico";

class DashboardControle {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id

        const dashboardServico = new DashboardServico()
        const sistema = await dashboardServico.execute(user_id)

        return res.json(sistema)
    }
}

export { DashboardControle }