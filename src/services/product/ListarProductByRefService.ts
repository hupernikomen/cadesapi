import prismaClient from '../../prisma';

interface ProdutoRequest {
    ref: string;
}

class ListarProductByRefService {
    async execute({ ref }: ProdutoRequest) {
        return await prismaClient.product.findMany({
            where: {
                ref: ref,
            }
        });
    }
}

export { ListarProductByRefService };