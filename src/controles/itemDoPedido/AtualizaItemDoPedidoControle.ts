import { Request, Response, response } from 'express'
import { AtualizaItemDoPedidoServico } from '../../servicos/itemDoPedido/AtualizaItemDoPedidoServico'

class AtualizaItemDoPedidoControle {
    async handle(req: Request, res: Response) {
        const itemDoPedidoID = req.query.itemDoPedidoID as string

        const { quantidade, produtoID } = req.body

        const atualizaItemDoPedidoServico = new AtualizaItemDoPedidoServico()
        const itemDoPedidoAtualizado = await atualizaItemDoPedidoServico.execute({ quantidade, itemDoPedidoID, produtoID })

        return res.json(itemDoPedidoAtualizado)
    }
}

export { AtualizaItemDoPedidoControle }