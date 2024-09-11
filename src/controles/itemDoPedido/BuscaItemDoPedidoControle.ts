import { Request, Response } from 'express'
import { BuscaItemDoPedidoServico } from '../../servicos/itemDoPedido/BuscaItemDoPedidoServico'


class BuscaItemDoPedidoControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string

        const buscaItemDoPedidoServico = new BuscaItemDoPedidoServico()

        const itemDoPedido = await buscaItemDoPedidoServico.execute({ ordemDeCompraID })
        return res.json(itemDoPedido)

    }
}

export { BuscaItemDoPedidoControle }