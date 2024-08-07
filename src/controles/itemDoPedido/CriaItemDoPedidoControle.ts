import { Request, Response, response } from 'express'
import { CriaItemDoPedidoServico } from '../../servicos/itemDoPedido/CriaItemDoPedidoServico'

class CriaItemDoPedidoControle {
    async handle(req: Request, res: Response) {
        const { quantidade, ordemDeCompraID, produtoID } = req.body

        const criaItemDoPedidoServico = new CriaItemDoPedidoServico()
        const itemDoPedido = await criaItemDoPedidoServico.execute({ quantidade, ordemDeCompraID, produtoID })

        return res.json(itemDoPedido)
    }
}

export { CriaItemDoPedidoControle }