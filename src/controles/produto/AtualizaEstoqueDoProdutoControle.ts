import { Request, Response, response } from 'express'
import { AtualizaEstoqueDoProdutoService } from '../../servicos/produto/AtualizaEstoqueDoProdutoService'

class AtualizaEstoqueDoProdutoControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const atualizaEstoqueDoProdutoService = new AtualizaEstoqueDoProdutoService()
        const produto = await atualizaEstoqueDoProdutoService.execute({ ordemDeCompraID })

        return res.json(produto)
    }
}

export { AtualizaEstoqueDoProdutoControle }