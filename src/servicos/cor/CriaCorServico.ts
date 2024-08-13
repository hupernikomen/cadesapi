import prismaclient from "../../prisma";

interface DadosCor {
    nome: string;
    codigo: string
}

class CriaCorServico {
    async execute({ nome, codigo }: DadosCor) {

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
                codigo
            }
        })

        return corCriada
    }
}

export { CriaCorServico }