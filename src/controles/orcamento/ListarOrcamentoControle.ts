import { Request, Response } from 'express'
import { ListarOrcamentoServico } from '../../servicos/orcamento/ListarOrcamentoServico'


class ListarOrcamentoControle {
    async handle(req: Request, res: Response) {
        const pedidoId = req.query.pedidoId as string
        const listarOrcamentoServico = new ListarOrcamentoServico()

        const pedidos = await listarOrcamentoServico.execute({ pedidoId })
        return res.json(pedidos)

    }
}

export { ListarOrcamentoControle }