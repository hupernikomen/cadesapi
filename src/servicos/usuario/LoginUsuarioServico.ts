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
                    senha: await hash('465437', 8)
                },
            })
        }

        const usuarios = await prismaclient.usuario.findMany()
        console.log(usuarios, "Todos os usuarios");
        

        const usuarioEncontrado = await prismaclient.usuario.findFirst({
            where: {
                nome: nome
            }
        })

        if (!usuarioEncontrado) {
            console.log("Usuário não existe");
            throw new Error("Usuário não existe");

        }

        const comparesenha = await compare(senha, usuarioEncontrado.senha)

        if (!comparesenha) {
            console.log("Senha Incorreta");
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
                // expiresIn: '30d'

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