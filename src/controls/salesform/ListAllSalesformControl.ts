import { Request, Response } from 'express'
import { ListAllSalesformService } from '../../services/salesform/ListAllSalesformService'


class ListAllSalesformControl {
    async handle(req: Request, res: Response) {
        const listAllSalesformService = new ListAllSalesformService()

        const salesform = await listAllSalesformService.execute()
        return res.json(salesform)

    }
}

export { ListAllSalesformControl }