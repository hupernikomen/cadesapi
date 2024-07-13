import { Request, Response } from 'express'
import { ListarPedidosClienteServico } from '../../servicos/pedido/ListarPedidosClienteServico'


class ListarPedidosClienteControle {
    async handle(req: Request, res: Response) {
        const clienteId = req.query.clienteId as string
        const listarPedidosClienteServico = new ListarPedidosClienteServico()

        const pedidos = await listarPedidosClienteServico.execute({ clienteId })
        return res.json(pedidos)

    }
}

export { ListarPedidosClienteControle }