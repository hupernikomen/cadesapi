import { Request, Response } from 'express'
import { ListaCorServico } from '../../servicos/cor/ListaCorServico'


class ListaCorControle {
    async handle(req: Request, res: Response) {
        const listaCorServico = new ListaCorServico()

        const todasAsCores = await listaCorServico.execute()
        return res.json(todasAsCores)

    }
}

export { ListaCorControle }