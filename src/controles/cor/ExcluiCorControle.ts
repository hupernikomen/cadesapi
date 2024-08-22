import { Request, Response, response } from 'express'
import { ExcluiCorServico } from '../../servicos/cor/ExcluiCorServico'

class ExcluiCorControle {
    async handle(req: Request, res: Response) {
        const corNome = req.query.corNome as string

        const excluiCorServico = new ExcluiCorServico()
        const cor = await excluiCorServico.execute({ corNome })

        return res.json(cor)
    }
}

export { ExcluiCorControle }