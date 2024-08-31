import { Request, Response, response } from 'express'
import { AtualizaProdutosEmMassaServico } from '../../servicos/produto/AtualizaProdutosEmMassaServico'

class AtualizaProdutoEmMassaControle {
    async handle(req: Request, res: Response) {
        const referencia = req.query.referencia as string

        const { detalhes } = req.body

        const atualizaProdutosEmMassaServico = new AtualizaProdutosEmMassaServico()
        const produto = await atualizaProdutosEmMassaServico.execute({ referencia, detalhes })

        return res.json(produto)
    }
}

export { AtualizaProdutoEmMassaControle }