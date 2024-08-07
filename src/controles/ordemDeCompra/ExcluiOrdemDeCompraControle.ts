import { Request, Response, response } from 'express'
import { ExcluiOrdemDeCompraServico } from '../../servicos/ordemDeCompra/ExcluiOrdemDeCompraServico'

class ExcluiOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const excluiOrdemDeCompraServico = new ExcluiOrdemDeCompraServico()
        const ordemDeCompra = await excluiOrdemDeCompraServico.execute({ ordemDeCompraID })

        return res.json(ordemDeCompra)
    }
}

export { ExcluiOrdemDeCompraControle }