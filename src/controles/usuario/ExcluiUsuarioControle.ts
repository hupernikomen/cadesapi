import { Request, Response, response } from 'express'
import { ExcluiUsuarioService } from '../../servicos/usuario/ExcluiUsuarioService'

class ExcluiUsuarioControle {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string

        const excluiUsuarioService = new ExcluiUsuarioService()
        const usuario = await excluiUsuarioService.execute({ usuarioID })

        return res.json(usuario)
    }
}

export { ExcluiUsuarioControle }