import { Request, Response } from 'express'
import { ListaTodosOsProdutosServico } from '../../servicos/produto/ListaTodosOsProdutosServico'


class ListaTodosOsProdutosControle {
    async handle(req: Request, res: Response) {
        const listaTodosOsProdutosServico = new ListaTodosOsProdutosServico()

        const products = await listaTodosOsProdutosServico.execute()
        return res.json(products)

    }
}

export { ListaTodosOsProdutosControle }