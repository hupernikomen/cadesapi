import prismaclient from "../../prisma";

interface DadosDaCor {
    corID: string,
    corHexa:string,
    nome: string
}

// Movimentação para retirada definitiva do estoque
class AtualizarCorServico {
    async execute({ corID, corHexa, nome }: DadosDaCor) {

        await prismaclient.cor.updateMany({
            where: {
                id: corID,
            },
            data: {
                corHexa,
                nome
            }
        })


    }
}

export { AtualizarCorServico }