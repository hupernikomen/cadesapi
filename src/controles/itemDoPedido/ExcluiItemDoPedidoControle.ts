import { Request, Response, response } from 'express'
import { ExcluiItemDoPedidoServico } from '../../servicos/itemDoPedido/ExcluiItemDoPedidoServico'

class ExcluiItemDoPedidoControle {
    async handle(req: Request, res: Response) {
        const itemDoPedidoID = req.query.itemDoPedidoID as string

        const excluiItemDoPedidoServico = new ExcluiItemDoPedidoServico()
        const itemDoPedido = await excluiItemDoPedidoServico.execute({ itemDoPedidoID })

        return res.json(itemDoPedido)
    }
}

export { ExcluiItemDoPedidoControle }