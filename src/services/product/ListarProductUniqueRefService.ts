import prismaClient from '../../prisma';

interface ProdutoRequest {
    ref: string;
}

class ListarProductUniqueRefService {
    async execute({ ref }: ProdutoRequest) {
        return await prismaClient.product.findFirst({
            where:{
                ref:ref
            }
        });
    }
}

export { ListarProductUniqueRefService };