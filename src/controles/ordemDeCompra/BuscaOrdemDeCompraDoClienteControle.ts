import { Request, Response } from 'express'
import { BuscaOrdemDeCompraDoClienteServico } from '../../servicos/ordemDeCompra/BuscaOrdemDeCompraDoClienteServico'


class ExcluiOrdemDeCompraServico {
    async handle(req: Request, res: Response) {
        const clienteID = req.query.clienteID as string
        const buscaOrdemDeCompraDoClienteServico = new BuscaOrdemDeCompraDoClienteServico()

        const ordemDeCompra = await buscaOrdemDeCompraDoClienteServico.execute({ clienteID })
        return res.json(ordemDeCompra)

    }
}

export { ExcluiOrdemDeCompraServico }