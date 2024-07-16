import { Request, Response } from 'express'
import { ListProductByCodeService } from '../../services/product/ListProductByCodeService'


class ListProductByCodeControl {
    async handle(req: Request, res: Response) {
        const code = req.query.code as string

        const listProductByCodeService = new ListProductByCodeService()

        const product = await listProductByCodeService.execute({
            code,
        })
        return res.json(product)

    }
}

export { ListProductByCodeControl }