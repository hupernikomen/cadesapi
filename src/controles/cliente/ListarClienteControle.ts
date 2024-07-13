import { Request, Response } from 'express'
import { ListarClienteServico } from '../../servicos/cliente/ListarClienteServico'


class ListarClienteControle {
    async handle(req: Request, res: Response) {
        const cpf = req.query.cpf as string

        const listarClienteServico = new ListarClienteServico()

        const cliente = await listarClienteServico.execute({ cpf })
        return res.json(cliente)

    }
}

export { ListarClienteControle }