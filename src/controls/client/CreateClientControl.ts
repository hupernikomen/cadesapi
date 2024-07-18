import { Request, Response, response } from 'express'
import { CreateClientService } from '../../services/client/CreateClientService'

class CreateClientControl {
    async handle(req: Request, res: Response) {
        const { cpf_cnpj, name, address, district, city, uf, whatsapp, birthDate } = req.body

        const createClientService = new CreateClientService()
        const client = await createClientService.execute({ cpf_cnpj, name, address, district, city, uf, whatsapp, birthDate })

        return res.json(client)
    }
}

export { CreateClientControl }