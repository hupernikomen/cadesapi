import prismaClient from '../../prisma';

interface ProdutoRequest {
    codigo: string;
}

class ListarProdutoCodServico {
    async execute({ codigo }: ProdutoRequest) {
        return await prismaClient.produto.findFirst({
            where: {
                codigo: codigo,
            }
        });
    }
}

export { ListarProdutoCodServico };