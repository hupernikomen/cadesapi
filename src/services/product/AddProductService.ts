import prismaclient from "../../prisma";

interface StockRequest {
    productID: string;
    newAmount: number;
    valueResale: string; 
    valueRetail: string
}

// Movimentação para retirada definitiva do estoque
class AddProductService {
    async execute({ productID, newAmount, valueResale, valueRetail }: StockRequest) {


        const _product = await prismaclient.product.findFirst({
            where: {
                id: productID
            }
        })

        await prismaclient.product.updateMany({
            where: {
                id: productID
            },
            data: {
                stock: _product.stock + newAmount,
                valueResale, 
                valueRetail
            }
        })
    }
}

export { AddProductService }