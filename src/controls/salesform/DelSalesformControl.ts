import { Request, Response, response } from 'express'
import { DelSalesformService } from '../../services/salesform/DelSalesformService'

class DelSalesformControl {
    async handle(req: Request, res: Response) {
        const salesformID = req.query.salesformID as string

        const delSalesformService = new DelSalesformService()
        const salesform = await delSalesformService.execute({ salesformID })

        return res.json(salesform)
    }
}

export { DelSalesformControl }