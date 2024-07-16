import { Request, Response } from 'express'
import { ListSalesformByClientService } from '../../services/salesform/ListSalesformByClientService'


class ListSalesformByClientControl {
    async handle(req: Request, res: Response) {
        const clientID = req.query.clientID as string
        const listSalesformByClientService = new ListSalesformByClientService()

        const pedidos = await listSalesformByClientService.execute({ clientID })
        return res.json(pedidos)

    }
}

export { ListSalesformByClientControl }