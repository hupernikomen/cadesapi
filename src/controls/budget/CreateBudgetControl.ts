import { Request, Response, response } from 'express'
import { CreateBudgetService } from '../../services/budget/CreateBudgetService'

class CreateBudgetControl {
    async handle(req: Request, res: Response) {
        const { amount, salesformID, productID } = req.body

        const createBudgetService = new CreateBudgetService()
        const budget = await createBudgetService.execute({ amount, salesformID, productID })

        return res.json(budget)
    }
}

export { CreateBudgetControl }