import { Request, Response } from 'express'
import { ListaErrosService } from '../../servicos/produto/ListaErrosService'


class ListaErrosControle {
    async handle(req: Request, res: Response) {
        const listaErrosService = new ListaErrosService()

        const products = await listaErrosService.execute()
        return res.json(products)

    }
}

export { ListaErrosControle }