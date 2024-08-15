import { Request, Response, response } from 'express'
import { ExcluiProdutoService } from '../../servicos/produto/ExcluiProdutoService'

class ExcluiProdutoControle {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string

        const excluiProdutoService = new ExcluiProdutoService()
        const produto = await excluiProdutoService.execute({ produtoID })

        return res.json(produto)
    }
}

export { ExcluiProdutoControle }