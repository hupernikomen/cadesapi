import { Request, Response } from 'express'
import { ListarProductByRefService } from '../../services/product/ListarProductByRefService'


class ListarProductByRefControl {
    async handle(req: Request, res: Response) {
        const ref = req.query.ref as string

        const listarProductByRefService = new ListarProductByRefService()

        const product = await listarProductByRefService.execute({ ref })
        return res.json(product)

    }
}

export { ListarProductByRefControl }