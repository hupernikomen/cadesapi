import prismaClient from '../../prisma';

interface ProductRequest {
    code: string;
}

class ListProductByCodeService {
    async execute({ code }: ProductRequest) {
        return await prismaClient.product.findFirst({
            where: {
                code: code,
            }
        });
    }
}

export { ListProductByCodeService };