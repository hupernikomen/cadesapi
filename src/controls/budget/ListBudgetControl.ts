import { Request, Response } from 'express'
import { ListBudgetService } from '../../services/budget/ListBudgetService'


class ListBudgetControl {
    async handle(req: Request, res: Response) {
        const salesformID = req.query.salesformID as string
        const listBudgetService = new ListBudgetService()

        const salesform = await listBudgetService.execute({ salesformID })
        return res.json(salesform)

    }
}

export { ListBudgetControl }