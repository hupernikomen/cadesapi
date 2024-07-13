import { Request, Response } from 'express'
import { ListarClientesServico } from '../../servicos/cliente/ListarClientesServico'


class ListarClientesControle {
    async handle(req: Request, res: Response) {
        const listarClientesServico = new ListarClientesServico()

        const clientes = await listarClientesServico.execute()
        return res.json(clientes)

    }
}

export { ListarClientesControle }