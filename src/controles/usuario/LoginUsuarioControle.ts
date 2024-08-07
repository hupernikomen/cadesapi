import { Request, Response } from "express";
import { LoginUsuarioServico } from "../../servicos/usuario/LoginUsuarioServico";

class LoginUsuarioControle {
    async handle(req: Request, res: Response) {
        const { nome, senha } = req.body
        const loginUsuarioServico = new LoginUsuarioServico()

        const loginDoUsuario = await loginUsuarioServico.execute({
            nome, senha
        })

        return res.json(loginDoUsuario)
    }
}

export { LoginUsuarioControle }