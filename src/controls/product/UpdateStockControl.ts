import { Request, Response, response } from 'express'
import { UpdateStockService } from '../../services/product/UpdateStockService'

class UpdateStockControl {
    async handle(req: Request, res: Response) {
        const salesformID = req.query.salesformID as string

        const updateStockService = new UpdateStockService()
        const product = await updateStockService.execute({ salesformID })

        return res.json(product)
    }
}

export { UpdateStockControl }