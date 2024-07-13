import { Request, Response } from 'express'
import { ListaPedidosServico } from '../../servicos/pedido/ListaPedidosServico'


class ListaPedidosControle {
    async handle(req: Request, res: Response) {
        const listaPedidosServico = new ListaPedidosServico()

        const pedidos = await listaPedidosServico.execute()
        return res.json(pedidos)

    }
}

export { ListaPedidosControle }