import { Request, Response } from 'express'
import { ListAllClientsService } from '../../services/client/ListAllClientsService'


class ListAllClientsControl {
    async handle(req: Request, res: Response) {
        const listAllClientsService = new ListAllClientsService()

        const clients = await listAllClientsService.execute()
        return res.json(clients)

    }
}

export { ListAllClientsControl }