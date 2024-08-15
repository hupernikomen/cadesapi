import prismaclient from "../../prisma";

interface DadosDoProduto {
    produtoID: string;
}

class ExcluiProdutoService {
    async execute({ produtoID }: DadosDoProduto) {

        await prismaclient.produto.delete({
            where: {
                id: produtoID
            }
        })

    }
}

export { ExcluiProdutoService }