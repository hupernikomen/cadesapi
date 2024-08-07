import prismaclient from "../../prisma";
import { hash } from 'bcryptjs'

interface DadosDoUsuario {
    cargo: string;
    nome: string;
    senha: string
}

class CriaUsuarioServico {
    async execute({ cargo, nome, senha }: DadosDoUsuario) {

        const usuarioEncontrado = await prismaclient.usuario.findFirst({
            where: {
                nome: nome
            }
        })

        if (usuarioEncontrado) {
            throw new Error(`${cargo} ${nome} já cadastrado`);
        }

        const senhahash = await hash(senha, 8)

        const usuarioCriado = await prismaclient.usuario.create({
            data: {
                cargo,
                nome,
                senha: senhahash
            },
            select: {
                cargo: true,
                nome: true
            }
        })

        return usuarioCriado
    }
}

export { CriaUsuarioServico }