import { Request, Response, response } from 'express'
import { PutSalesformService } from '../../services/salesform/PutSalesformService'

class PutSalesformControl {
    async handle(req: Request, res: Response) {
        const salesformID = req.query.salesformID as string

        const { state } = req.body

        const putSalesformService = new PutSalesformService()
        const salesform = await putSalesformService.execute({ salesformID, state })

        return res.json(salesform)
    }
}

export { PutSalesformControl }