import { Request, Response, response } from 'express'
import { AtualizaProdutoServico } from '../../servicos/produto/AtualizaProdutoServico'

class AtualizaProdutoControle {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string

        const { nome, valorAtacado, valorVarejo } = req.body

        const atualizaProdutoServico = new AtualizaProdutoServico()
        const produto = await atualizaProdutoServico.execute({ nome, valorAtacado, valorVarejo, produtoID })

        return res.json(produto)
    }
}

export { AtualizaProdutoControle }