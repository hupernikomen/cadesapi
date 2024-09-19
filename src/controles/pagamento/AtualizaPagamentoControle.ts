import { Request, Response, response } from 'express'
import { AtualizaPagamentoServico } from '../../servicos/pagamento/AtualizaPagamentoServico'

class AtualizaPagamentoControle {
  async handle(req: Request, res: Response) {
    const ordemDeCompraID = req.query.ordemDeCompraID as string

    const { parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs, tipo } = req.body

    const atualizaPagamentoServico = new AtualizaPagamentoServico()
    const pagamento = await atualizaPagamentoServico.execute({ parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs, tipo, ordemDeCompraID })

    return res.json(pagamento)
  }
}

export { AtualizaPagamentoControle }