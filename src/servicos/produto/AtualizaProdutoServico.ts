import prismaclient from "../../prisma";

interface DadosDoProduto {
    valorAtacado: string;
    valorVarejo: string,
    nome: string,
    produtoID: string
}

// Movimentação para retirada definitiva do estoque
class AtualizaProdutoServico {
    async execute({ produtoID, nome, valorAtacado, valorVarejo }: DadosDoProduto) {

        await prismaclient.produto.updateMany({
            where: {
                id: produtoID,
            },
            data: {
                nome,
                valorAtacado,
                valorVarejo
            }
        })


    }
}

export { AtualizaProdutoServico }