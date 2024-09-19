import { Request, Response } from 'express'
import { BuscaPagamentoServico } from '../../servicos/pagamento/BuscaPagamentoServico'


class BuscaPagamentoControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const bscaPagamentoServico = new BuscaPagamentoServico()

        const pagamento = await bscaPagamentoServico.execute({ ordemDeCompraID })
        return res.json(pagamento)

    }
}

export { BuscaPagamentoControle }