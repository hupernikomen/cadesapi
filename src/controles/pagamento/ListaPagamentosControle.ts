import { Request, Response } from 'express'
import { ListaPagamentosServico } from '../../servicos/pagamento/ListaPagamentosServico'


class ListaPagamentosControle {
    async handle(req: Request, res: Response) {
        const listaPagamentosServico = new ListaPagamentosServico()

        const pagamentos = await listaPagamentosServico.execute()
        return res.json(pagamentos)

    }
}

export { ListaPagamentosControle }