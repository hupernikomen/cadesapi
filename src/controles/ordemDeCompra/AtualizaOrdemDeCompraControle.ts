import { Request, Response, response } from 'express'
import { AtualizaOrdemDeCompraServico } from '../../servicos/ordemDeCompra/AtualizaOrdemDeCompraServico'

class AtualizaOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const { estado, formaDePagamento, valorPago, tempoDePagamento, valorAdiantado, observacao } = req.body

        const atualizaOrdemDeCompraServico = new AtualizaOrdemDeCompraServico()
        const ordemDeCompra = await atualizaOrdemDeCompraServico.execute({ ordemDeCompraID, estado, formaDePagamento, valorPago, tempoDePagamento, valorAdiantado, observacao })

        return res.json(ordemDeCompra)
    }
}

export { AtualizaOrdemDeCompraControle }