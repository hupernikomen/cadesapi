import prismaclient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginRequest {
    nome: string;
    senha: string;
}

class LoginUsuarioServico {
    async execute({ nome, senha }: LoginRequest) {
        const usuario = await prismaclient.usuario.findFirst({
            where: {
                nome: nome
            }
        })

        if (!usuario) {
            throw new Error("Usuário não existe");

        }

        const comparasenha = await compare(senha, usuario.senha)

        if (!comparasenha) {
            throw new Error("Senha Incorreta");

        }

        // Gerar token 
        const token = sign(
            {
                tipo: usuario.tipo,
                nome: usuario.nome,

            },
            process.env.JWT_secret,
            {
                subject: usuario.id,
                expiresIn: '30d'

            }

        )

        return {
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo,
            token: token
        }


    }
}

export { LoginUsuarioServico }