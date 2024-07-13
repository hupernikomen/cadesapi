import { Request, Response } from 'express'
import { ListarProdutoRefServico } from '../../servicos/produto/ListarProdutoRefServico'


class ListarProdutoRefControle {
    async handle(req: Request, res: Response) {
        const referencia = req.query.referencia as string

        const listarProdutoRefServico = new ListarProdutoRefServico()

        const produto = await listarProdutoRefServico.execute({
            referencia,
        })
        return res.json(produto)

    }
}

export { ListarProdutoRefControle }