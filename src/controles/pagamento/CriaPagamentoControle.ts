import { Request, Response, response } from 'express'
import { CriaPagamentoServico } from '../../servicos/pagamento/CriaPagamentoServico'

class CriaPagamentoControle {
    async handle(req: Request, res: Response) {
      
        const ordemDeCompraID = req.query.ordemDeCompraID as string
        const { parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs, tipo } = req.body

        const criaPagamentoServico = new CriaPagamentoServico()
        const pagamento = await criaPagamentoServico.execute({ parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs, tipo, ordemDeCompraID })

        return res.json(pagamento)
    }
}

export { CriaPagamentoControle }