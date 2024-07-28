import { Request, Response } from 'express'
import { ListarProductUniqueRefService } from '../../services/product/ListarProductUniqueRefService'


class ListarProductUniqueRefControl {
    async handle(req: Request, res: Response) {
        const ref = req.query.ref as string

        const listarProductUniqueRefService = new ListarProductUniqueRefService()

        const product = await listarProductUniqueRefService.execute({ ref })
        return res.json(product)

    }
}

export { ListarProductUniqueRefControl }