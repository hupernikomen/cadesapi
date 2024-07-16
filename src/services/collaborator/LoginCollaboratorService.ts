import prismaclient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginRequest {
    name: string;
    password: string;
}

class LoginCollaboratorService {
    async execute({ name, password }: LoginRequest) {
        const _registercollaborator = await prismaclient.collaborator.findFirst({
            where: {
                name: name
            }
        })

        if (!_registercollaborator) {
            throw new Error("Usuário não existe");

        }

        const comparepassword = await compare(password, _registercollaborator.password)

        if (!comparepassword) {
            throw new Error("Senha Incorreta");

        }

        // Gerar token 
        const token = sign(
            {
                type: _registercollaborator.type,
                name: _registercollaborator.name,

            },
            process.env.JWT_secret,
            {
                subject: _registercollaborator.id,
                expiresIn: '30d'

            }

        )

        return {
            id: _registercollaborator.id,
            name: _registercollaborator.name,
            type: _registercollaborator.type,
            token: token
        }


    }
}

export { LoginCollaboratorService }