import { Request, Response, response } from 'express'
import { AtualizarCorServico } from '../../servicos/cor/AtualizarCorServico'

class AtualizaCorControle {
    async handle(req: Request, res: Response) {
        const corID = req.query.corID as string

        const { corHexa } = req.body

        const atualizarCorServico = new AtualizarCorServico()
        const itemDoPedidoAtualizado = await atualizarCorServico.execute({ corHexa, corID })

        return res.json(itemDoPedidoAtualizado)
    }
}

export { AtualizaCorControle }