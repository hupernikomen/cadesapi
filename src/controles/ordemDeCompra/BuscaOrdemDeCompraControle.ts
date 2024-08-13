import { Request, Response } from 'express'
import { BuscaOrdemDeCompraServico } from '../../servicos/ordemDeCompra/BuscaOrdemDeCompraServico'


class BuscaOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string
        const buscaOrdemDeCompraServico = new BuscaOrdemDeCompraServico()

        const ordemDeCompra = await buscaOrdemDeCompraServico.execute({ ordemDeCompraID })
        return res.json(ordemDeCompra)

    }
}

export { BuscaOrdemDeCompraControle }