import { Request, Response } from 'express'
import { ListaUsuariosServico } from '../../servicos/usuario/ListaUsuariosServico'


class ListaUsuariosControle {
    async handle(req: Request, res: Response) {
        const listaUsuariosServico = new ListaUsuariosServico()

        const usuarios = await listaUsuariosServico.execute()
        return res.json(usuarios)

    }
}

export { ListaUsuariosControle }