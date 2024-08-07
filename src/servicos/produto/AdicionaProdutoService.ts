import prismaclient from "../../prisma";

interface DadosDoProduto {
    produtoID: string;
    entrada: number;
    valorAtacado: string; 
    valorVarejo: string
}

// Movimentação para retirada definitiva do estoque
class AdicionaProdutoService {
    async execute({ produtoID, entrada, valorAtacado, valorVarejo }: DadosDoProduto) {

        const produtoEncontrado = await prismaclient.produto.findFirst({
            where: {
                id: produtoID
            }
        })

        await prismaclient.produto.updateMany({
            where: {
                id: produtoID
            },
            data: {
                estoque: produtoEncontrado.estoque + entrada,
                valorAtacado, 
                valorVarejo
            }
        })
    }
}

export { AdicionaProdutoService }