import { Request, Response, response } from 'express'
import { CriarProdutoServico } from '../../servicos/produto/CriarProdutoServico'

class CriarProdutoControle {
    async handle(req: Request, res: Response) {
        const { codigo, referencia, nome, cor, tamanho, entrada, valorAtacado, valorVarejo } = req.body

        const criarProdutoServico = new CriarProdutoServico()
        const produto = await criarProdutoServico.execute({ 
            codigo,
            referencia, 
            nome, 
            cor, 
            tamanho, 
            entrada, 
            valorAtacado, 
            valorVarejo 
        })

        return res.json(produto)
    }
}

export { CriarProdutoControle }