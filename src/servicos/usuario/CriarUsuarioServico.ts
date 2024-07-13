import prismaclient from "../../prisma";
import { hash } from 'bcryptjs'

interface UsuarioRequest {
    tipo: string;
    nome: string;
    senha: string
}

class CriarUsuarioServico {
    async execute({ tipo, nome, senha }: UsuarioRequest) {

        const existe = await prismaclient.usuario.findFirst({
            where: {
                nome: nome
            }
        })

        if (existe) {
            throw new Error(`${tipo} ${nome} já cadastrado`);

        }

        const senhahash = await hash(senha, 8)

        const usuario = await prismaclient.usuario.create({
            data: {
                tipo,
                nome,
                senha: senhahash
            },
            select: {
                tipo: true,
                nome: true
            }
        })

        return usuario
    }
}

export { CriarUsuarioServico }