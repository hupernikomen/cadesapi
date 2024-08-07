import { Request, Response, response } from 'express'
import { AdicionaProdutoService } from '../../servicos/produto/AdicionaProdutoService'

class AdicionaProdutoControle {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string
        const {entrada, valorAtacado, valorVarejo } = req.body

        const adicionaProdutoService = new AdicionaProdutoService()
        const produto = await adicionaProdutoService.execute({ entrada, valorAtacado, valorVarejo, produtoID })

        return res.json(produto)
    }
}

export { AdicionaProdutoControle }