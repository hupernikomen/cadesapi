import { Request, Response } from 'express'
import { ListaTodosOsItensDoPedidoServico } from '../../servicos/itemDoPedido/ListaTodosOsItensDoPedidoServico'


class ListaTodosOsItensDoPedidoControle {
    async handle(req: Request, res: Response) {
        const ordemDeCompraID = req.query.ordemDeCompraID as string
        const listaTodosOsItensDoPedidoServico = new ListaTodosOsItensDoPedidoServico()

        const ListaDeitensDoPedido = await listaTodosOsItensDoPedidoServico.execute({ ordemDeCompraID })
        return res.json(ListaDeitensDoPedido)

    }
}

export { ListaTodosOsItensDoPedidoControle }