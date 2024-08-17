import { Request, Response, response } from 'express'
import { ExcluiItemDoPedidoServico } from '../../servicos/itemDoPedido/ExcluiItemDoPedidoServico'

class ExcluiUsuarioControle {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string

        const excluiItemDoPedidoServico = new ExcluiItemDoPedidoServico()
        const usuario = await excluiItemDoPedidoServico.execute({ usuarioID })

        return res.json(usuario)
    }
}

export { ExcluiUsuarioControle }