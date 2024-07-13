import prismaClient from '../../prisma';

interface ProdutoRequest {
    referencia: string;
}

class ListarProdutoRefServico {
    async execute({ referencia }: ProdutoRequest) {
        return await prismaClient.produto.findFirst({
            where: {
                referencia: referencia,
            }
        });
    }
}

export { ListarProdutoRefServico };