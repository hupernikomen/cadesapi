import { Request, Response } from 'express'
import { ListarProdutosServico } from '../../servicos/produto/ListarProdutosServico'


class ListarProdutosControle {
    async handle(req: Request, res: Response) {
        const listarProdutosServico = new ListarProdutosServico()

        const produtos = await listarProdutosServico.execute()
        return res.json(produtos)

    }
}

export { ListarProdutosControle }