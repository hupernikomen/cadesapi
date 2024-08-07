import { Request, Response } from 'express'
import { BuscaProdutoPorReferenciaServico } from '../../servicos/produto/BuscaProdutoPorReferenciaServico'


class BuscaProdutoPorReferenciaControle {
    async handle(req: Request, res: Response) {
        const referencia = req.query.referencia as string

        const buscaProdutoPorReferenciaServico = new BuscaProdutoPorReferenciaServico()

        const produto = await buscaProdutoPorReferenciaServico.execute({ referencia })
        return res.json(produto)

    }
}

export { BuscaProdutoPorReferenciaControle }