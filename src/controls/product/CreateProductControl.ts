import { Request, Response, response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductControl {
    async handle(req: Request, res: Response) {
        const { code, ref, name, color, size, stock, valueResale, valueRetail } = req.body

        const createProductService = new CreateProductService()
        const product = await createProductService.execute({ 
            code, ref, name, color, size, stock, valueResale, valueRetail 
        })

        return res.json(product)
    }
}

export { CreateProductControl }