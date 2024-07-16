import prismaclient from "../../prisma";
import { hash } from 'bcryptjs'

interface UsuarioRequest {
    type: string;
    name: string;
    password: string
}

class CreateCollaboratorService {
    async execute({ type, name, password }: UsuarioRequest) {

        const _registercollaborator = await prismaclient.collaborator.findFirst({
            where: {
                name: name
            }
        })

        if (_registercollaborator) {
            throw new Error(`${type} ${name} já cadastrado`);

        }

        const passwordhash = await hash(password, 8)

        const collaborator = await prismaclient.collaborator.create({
            data: {
                type,
                name,
                password: passwordhash
            },
            select: {
                type: true,
                name: true
            }
        })

        return collaborator
    }
}

export { CreateCollaboratorService }