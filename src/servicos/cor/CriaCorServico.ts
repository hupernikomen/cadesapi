import prismaclient from "../../prisma";

interface DadosCor {
    nome: string;
    codigo: string,
    corHexa: string
}

class CriaCorServico {
    async execute({ nome, codigo, corHexa }: DadosCor) {

        const corEncontrada = await prismaclient.cor.findFirst({
            where: {
                OR: [
                    { nome: nome },
                    { codigo: codigo }
                ]
            }
        })

        if (corEncontrada) {
            throw new Error("Cor já existe");
        }

        const corCriada = await prismaclient.cor.create({
            data: {
                nome,
                codigo,
                corHexa
            }
        })

        return corCriada
    }
}

export { CriaCorServico }