import { Request, Response, response } from 'express'
import { CreateSalesformService } from '../../services/salesform/CreateSalesformService'

class CreateSalesformControl {
    async handle(req: Request, res: Response) {
        const { clientID, collaboratorID, formPayment } = req.body

        const createSalesformService = new CreateSalesformService()
        const salesform = await createSalesformService.execute({ clientID, collaboratorID, formPayment })

        return res.json(salesform)
    }
}

export { CreateSalesformControl }