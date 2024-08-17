import prismaclient from "../../prisma";
import { compare } from 'bcryptjs'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginRequest {
    nome: string;
    senha: string;
}

class LoginUsuarioServico {
    async execute({ nome, senha }: LoginRequest) {

        const contagemDeUsuarios = await prismaclient.usuario.count()
        
        if (contagemDeUsuarios === 0) {
            await prismaclient.usuario.create({
                data: {
                    cargo: 'Socio',
                    nome: 'Wilson Ramos',
                    senha: await hash('465437', 8),
                    matricula:'03'
                },
            })
        }

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
                matricula: usuarioEncontrado.matricula,
                cargo: usuarioEncontrado.cargo,
                nome: usuarioEncontrado.nome,

            },
            process.env.JWT_secret,
            {
                subject: usuarioEncontrado.id,
                // expiresIn: '30d'

            }

        )

        return {
            id: usuarioEncontrado.id,
            matricula: usuarioEncontrado.matricula,
            nome: usuarioEncontrado.nome,
            cargo: usuarioEncontrado.cargo,
            token: token
        }


    }
}

export { LoginUsuarioServico }