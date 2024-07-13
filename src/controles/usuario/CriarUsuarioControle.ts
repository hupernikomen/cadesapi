import { Request, Response, response } from 'express'
import { CriarUsuarioServico } from '../../servicos/usuario/CriarUsuarioServico'

class CriarUsuarioControle {
    async handle(req: Request, res: Response) {
        const { tipo, nome, senha } = req.body

        const criarUsuarioServico = new CriarUsuarioServico()
        const user = await criarUsuarioServico.execute({ tipo, nome, senha })

        return res.json(user)
    }
}

export { CriarUsuarioControle }