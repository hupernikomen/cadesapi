import prismaclient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginRequest {
    nome: string;
    senha: string;
}

class LoginUsuarioServico {
    async execute({ nome, senha }: LoginRequest) {
        const usuarioEncontrado = await prismaclient.usuario.findFirst({
            where: {
                nome: nome
            }
        })

        if (!usuarioEncontrado) {
            throw new Error("Usuário não existe");

        }

        const comparesenha = await compare(senha, usuarioEncontrado.senha)

        if (!comparesenha) {
            throw new Error("Senha Incorreta");

        }

        // Gerar token 
        const token = sign(
            {
                cargo: usuarioEncontrado.cargo,
                nome: usuarioEncontrado.nome,

            },
            process.env.JWT_secret,
            {
                subject: usuarioEncontrado.id,
                expiresIn: '30d'

            }

        )

        return {
            id: usuarioEncontrado.id,
            nome: usuarioEncontrado.nome,
            cargo: usuarioEncontrado.cargo,
            token: token
        }


    }
}

export { LoginUsuarioServico }