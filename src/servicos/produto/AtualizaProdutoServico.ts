import prismaclient from "../../prisma";

interface DadosDoProduto {
    valorAtacado: string;
    valorVarejo: string,
    nome: string,
    detalhes: string;
    produtoID: string,
    reservado:number,
    saida: number
}

// Movimentação para retirada definitiva do estoque
class AtualizaProdutoServico {
    async execute({ produtoID, nome, detalhes, valorAtacado, valorVarejo, reservado, saida }: DadosDoProduto) {

        await prismaclient.produto.updateMany({
            where: {
                id: produtoID,
            },
            data: {
                nome,
                detalhes,
                valorAtacado,
                valorVarejo, reservado, saida
            }
        })


    }
}

export { AtualizaProdutoServico }