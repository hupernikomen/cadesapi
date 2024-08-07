import { Request, Response } from 'express'
import { ListarProductUniqueRefService } from '../../servicos/produto/ListarProductUniqueRefService'


class ListarProductUniqueRefControl {
    async handle(req: Request, res: Response) {
        const referencia = req.query.referencia as string

        const listarProductUniqueRefService = new ListarProductUniqueRefService()

        const produto = await listarProductUniqueRefService.execute({ referencia })
        return res.json(produto)

    }
}

export { ListarProductUniqueRefControl }