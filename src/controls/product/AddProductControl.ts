import { Request, Response, response } from 'express'
import { AddProductService } from '../../services/product/AddProductService'

class AddProductControl {
    async handle(req: Request, res: Response) {
        const productID = req.query.productID as string
        const {newAmount, valueResale, valueRetail } = req.body

        const addProductService = new AddProductService()
        const product = await addProductService.execute({ newAmount, valueResale, valueRetail, productID })

        return res.json(product)
    }
}

export { AddProductControl }