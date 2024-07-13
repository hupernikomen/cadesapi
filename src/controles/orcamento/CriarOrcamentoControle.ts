import { Request, Response, response } from 'express'
import { CriarOrcamentoServico } from '../../servicos/orcamento/CriarOrcamentoServico'

class CriarOrcamentoControle {
    async handle(req: Request, res: Response) {
        const { quantidade, pedidoId, referencia, cor, tamanho } = req.body

        const criarOrcamentoServico = new CriarOrcamentoServico()
        const orcamento = await criarOrcamentoServico.execute({ quantidade, referencia, pedidoId, cor, tamanho })

        return res.json(orcamento)
    }
}

export { CriarOrcamentoControle }