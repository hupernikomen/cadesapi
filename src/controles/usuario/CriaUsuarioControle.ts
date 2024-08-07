import { Request, Response, response } from 'express'
import { CriaUsuarioServico } from '../../servicos/usuario/CriaUsuarioServico'

class CriaUsuarioControle {
    async handle(req: Request, res: Response) {
        const { cargo, nome, senha } = req.body

        const criaUsuarioServico = new CriaUsuarioServico()
        const usuario = await criaUsuarioServico.execute({ cargo, nome, senha })

        return res.json(usuario)
    }
}

export { CriaUsuarioControle }