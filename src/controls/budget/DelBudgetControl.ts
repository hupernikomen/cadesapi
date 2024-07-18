import { Request, Response, response } from 'express'
import { DelBudgetService } from '../../services/budget/DelBudgetService'

class DelBudgetControl {
    async handle(req: Request, res: Response) {
        const budgetID = req.query.budgetID as string

        const delBudgetService = new DelBudgetService()
        const budget = await delBudgetService.execute({ budgetID })

        return res.json(budget)
    }
}

export { DelBudgetControl }