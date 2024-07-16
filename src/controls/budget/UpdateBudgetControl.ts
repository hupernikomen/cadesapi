import { Request, Response, response } from 'express'
import { UpdateBudgetService } from '../../services/budget/UpdateBudgetService'

class UpdateBudgetControl {
    async handle(req: Request, res: Response) {
        const productID = req.query.productID as string
        const budgetID = req.query.budgetID as string

        const { amount } = req.body

        const updateBudgetService = new UpdateBudgetService()
        const budget = await updateBudgetService.execute({ amount, budgetID, productID })

        return res.json(budget)
    }
}

export { UpdateBudgetControl }