import { Request, Response, response } from 'express'
import { AtualizaOrdemDeCompraServico } from '../../servicos/ordemDeCompra/AtualizaOrdemDeCompraServico'

class AtualizaOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const {tipo, estado, formaDePagamento,totalDaNota, valorPago, tempoDePagamento, valorAdiantado, observacao, desconto } = req.body

        const atualizaOrdemDeCompraServico = new AtualizaOrdemDeCompraServico()
        const ordemDeCompra = await atualizaOrdemDeCompraServico.execute({ tipo, ordemDeCompraID, estado,totalDaNota, formaDePagamento, valorPago, tempoDePagamento, valorAdiantado, observacao, desconto })

        return res.json(ordemDeCompra)
    }
}

export { AtualizaOrdemDeCompraControle }