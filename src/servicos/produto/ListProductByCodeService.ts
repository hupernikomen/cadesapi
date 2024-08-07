import prismaClient from '../../prisma';

interface ProductRequest {
    codigoDeBarras: string;
}

class ListProductByCodeService {
    async execute({ codigoDeBarras }: ProductRequest) {
        return await prismaClient.produto.findFirst({
            where: {
                codigoDeBarras: codigoDeBarras,
            }
        });
    }
}

export { ListProductByCodeService };