import { Request, Response } from 'express'
import { ListarProdutoCodServico } from '../../servicos/produto/ListarProdutoCodServico'


class ListarProdutoCodControle {
    async handle(req: Request, res: Response) {
        const codigo = req.query.codigo as string

        const listarProdutoCodServico = new ListarProdutoCodServico()

        const produto = await listarProdutoCodServico.execute({
            codigo,
        })
        return res.json(produto)

    }
}

export { ListarProdutoCodControle }