import { Request, Response, response } from 'express'
import { CancelaOrdemDeCompraService } from '../../servicos/ordemDeCompra/CancelaOrdemDeCompraService'

class CancelaOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const cancelaOrdemDeCompraService = new CancelaOrdemDeCompraService()
        const ordemDeCompra = await cancelaOrdemDeCompraService.execute({ ordemDeCompraID })

        return res.json(ordemDeCompra)
    }
}

export { CancelaOrdemDeCompraControle }