import { Request, Response } from 'express'
import { BuscaClienteServico } from '../../servicos/cliente/BuscaClienteServico'


class BuscaClienteControle {
    async handle(req: Request, res: Response) {
        const cpf_cnpj = req.query.cpf_cnpj as string

        const buscaClienteServico = new BuscaClienteServico()

        const oCliente = await buscaClienteServico.execute({ cpf_cnpj })
        return res.json(oCliente)

    }
}

export { BuscaClienteControle }