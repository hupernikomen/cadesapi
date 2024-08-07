import { Request, Response } from 'express'
import { ListaTodasAsOrdensDeCompraServico } from '../../servicos/ordemDeCompra/ListaTodasAsOrdensDeCompraServico'


class ListaTodasAsOrdensDeCompraControle {
    async handle(req: Request, res: Response) {
        const listaTodasAsOrdensDeCompraServico = new ListaTodasAsOrdensDeCompraServico()

        const ordensDeCompras = await listaTodasAsOrdensDeCompraServico.execute()
        return res.json(ordensDeCompras)

    }
}

export { ListaTodasAsOrdensDeCompraControle }