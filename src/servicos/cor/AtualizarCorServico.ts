import prismaclient from "../../prisma";

interface DadosDaCor {
    corID: string,
    corHexa:string
}

// Movimentação para retirada definitiva do estoque
class AtualizarCorServico {
    async execute({ corID, corHexa }: DadosDaCor) {

        await prismaclient.cor.updateMany({
            where: {
                id: corID,
            },
            data: {
                corHexa
            }
        })


    }
}

export { AtualizarCorServico }