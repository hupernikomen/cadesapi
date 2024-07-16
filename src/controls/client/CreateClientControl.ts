import { Request, Response, response } from 'express'
import { CreateClientService } from '../../services/client/CreateClientService'

class CreateClientControl {
    async handle(req: Request, res: Response) {
        const { cpf_cnpj, name, country, whatsapp, birthDate } = req.body

        console.log(cpf_cnpj, name, country, whatsapp, birthDate);

        const createClientService = new CreateClientService()
        const client = await createClientService.execute({ cpf_cnpj, name, country, whatsapp, birthDate })

        return res.json(client)
    }
}

export { CreateClientControl }