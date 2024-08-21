import { Request, Response, response } from 'express'
import { CriaOrdemDeCompraServico } from '../../servicos/ordemDeCompra/CriaOrdemDeCompraServico'

class CriaOrdemDeCompraControle {
    async handle(req: Request, res: Response) {
        const { clienteID, usuarioID, formaDePagamento, desconto, tipo } = req.body

        const criaOrdemDeCompraServico = new CriaOrdemDeCompraServico()
        const ordemDeCompra = await criaOrdemDeCompraServico.execute({ clienteID, usuarioID, formaDePagamento, desconto, tipo })

        return res.json(ordemDeCompra)
    }
}

export { CriaOrdemDeCompraControle }