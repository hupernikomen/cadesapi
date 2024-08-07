import prismaClient from '../../prisma';

interface DadosDoProduto {
    referencia: string;
}

class BuscaProdutoPorReferenciaServico {
    async execute({ referencia }: DadosDoProduto) {
        return await prismaClient.produto.findMany({
            where: {
                referencia: referencia,
            }
        });
    }
}

export { BuscaProdutoPorReferenciaServico };