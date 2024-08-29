import { Request, Response, response } from 'express'
import { CriaCorServico } from '../../servicos/cor/CriaCorServico'

class CriaCorControle {
    async handle(req: Request, res: Response) {
        const { nome, codigo, corHexa } = req.body

        const criaCorServico = new CriaCorServico()
        const cor = await criaCorServico.execute({ nome, codigo,corHexa })

        return res.json(cor)
    }
}

export { CriaCorControle }