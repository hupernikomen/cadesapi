import { Request, Response, response } from 'express'
import { CriarPedidoServico } from '../../servicos/pedido/CriarPedidoServico'

class CriarPedidoControle {
    async handle(req: Request, res: Response) {
        const { clienteId, usuarioId } = req.body

        const criarPedidoServico = new CriarPedidoServico()
        const pedido = await criarPedidoServico.execute({ clienteId, usuarioId })

        return res.json(pedido)
    }
}

export { CriarPedidoControle }