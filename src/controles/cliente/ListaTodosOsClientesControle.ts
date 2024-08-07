import { Request, Response } from 'express'
import { ListaTodosOsClientesService } from '../../servicos/cliente/ListaTodosOsClientesService'


class ListaTodosOsClientesControle {
    async handle(req: Request, res: Response) {
        const listaTodosOsClientesService = new ListaTodosOsClientesService()

        const todosOsClientes = await listaTodosOsClientesService.execute()
        return res.json(todosOsClientes)

    }
}

export { ListaTodosOsClientesControle }