import { Request, Response } from 'express'
import { BuscaClienteServico } from '../../servicos/cliente/BuscaClienteServico'


class BuscaClienteControle {
    async handle(req: Request, res: Response) {
        const clienteID = req.query.clienteID as string

        const buscaClienteServico = new BuscaClienteServico()

        const oCliente = await buscaClienteServico.execute({ clienteID })
        return res.json(oCliente)

    }
}

export { BuscaClienteControle }