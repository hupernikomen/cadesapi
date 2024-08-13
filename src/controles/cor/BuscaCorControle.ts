import { Request, Response } from 'express'
import { BuscaCorServico } from '../../servicos/cor/BuscaCorServico'


class BuscaCorControle {
    async handle(req: Request, res: Response) {
        const corID = req.query.corID as string

        const buscaCorServico = new BuscaCorServico()

        const cor = await buscaCorServico.execute({ corID })
        return res.json(cor)

    }
}

export { BuscaCorControle }