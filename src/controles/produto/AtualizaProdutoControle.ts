import { Request, Response, response } from 'express'
import { AtualizaProdutoServico } from '../../servicos/produto/AtualizaProdutoServico'

class AtualizaProdutoControle {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string

        const { nome, detalhes, valorAtacado, valorVarejo, reservado, saida, estoque } = req.body

        const atualizaProdutoServico = new AtualizaProdutoServico()
        const produto = await atualizaProdutoServico.execute({ nome, detalhes, valorAtacado, valorVarejo, produtoID, reservado, saida, estoque })

        return res.json(produto)
    }
}

export { AtualizaProdutoControle }