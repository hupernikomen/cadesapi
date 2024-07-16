import { Request, Response } from 'express'
import { ListClientService } from '../../services/client/ListClientService'


class ListClientControl {
    async handle(req: Request, res: Response) {
        const cpf_cnpj = req.query.cpf_cnpj as string

        const listClientService = new ListClientService()

        const client = await listClientService.execute({ cpf_cnpj })
        return res.json(client)

    }
}

export { ListClientControl }