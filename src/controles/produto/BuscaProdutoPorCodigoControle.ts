import { Request, Response } from 'express'
import { BuscaProdutoPorCodigoServico } from '../../servicos/produto/BuscaProdutoPorCodigoServico'


class BuscaProdutoPorCodigoControle {
    async handle(req: Request, res: Response) {
        const codigoDeBarras = req.query.codigoDeBarras as string

        const buscaProdutoPorCodigoServico = new BuscaProdutoPorCodigoServico()

        const produto = await buscaProdutoPorCodigoServico.execute({ codigoDeBarras })
        return res.json(produto)

    }
}

export { BuscaProdutoPorCodigoControle }