import { Request, Response, response } from 'express'
import { CriaProdutoServico } from '../../servicos/produto/CriaProdutoServico'

class CriaProdutoControle {
    async handle(req: Request, res: Response) {
        const { codigoDeBarras, referencia, nome, cor, tamanho, estoque, valorAtacado, valorVarejo } = req.body

        const criaProdutoServico = new CriaProdutoServico()

        const produto = await criaProdutoServico.execute({
            codigoDeBarras, referencia, nome, cor, tamanho, estoque, valorAtacado, valorVarejo
        })

        return res.json(produto)
    }
}

export { CriaProdutoControle }