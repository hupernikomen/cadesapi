import { Request, Response, response } from 'express'
import { CriarClienteServico } from '../../servicos/cliente/CriarClienteServico'

class CriarClienteControle {
    async handle(req: Request, res: Response) {
        const { cpf, nome, endereco, whatsapp, dataNascimento } = req.body

        const criarClienteServico = new CriarClienteServico()
        const cliente = await criarClienteServico.execute({ cpf, nome, endereco, whatsapp, dataNascimento })

        return res.json(cliente)
    }
}

export { CriarClienteControle }