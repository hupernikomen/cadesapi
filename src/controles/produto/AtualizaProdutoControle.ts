import { Request, Response, response } from 'express'
import { AtualizaProdutoServico } from '../../servicos/produto/AtualizaProdutoServico'

class AtualizaProdutoControle {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string

        const { nome, valorAtacado, valorVarejo, reservado, saida } = req.body

        const atualizaProdutoServico = new AtualizaProdutoServico()
        const produto = await atualizaProdutoServico.execute({ nome, valorAtacado, valorVarejo, produtoID, reservado, saida })

        return res.json(produto)
    }
}

export { AtualizaProdutoControle }