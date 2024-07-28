import prismaclient from "../../prisma";

interface ProductRequest {
    code: string,
    ref: string;
    name: string;
    color: string;
    size: string;
    stock: number;
    valueResale: string;
    valueRetail: string
}

class CreateProductService {
    async execute({ code, ref, name, color, size, stock, valueResale, valueRetail }: ProductRequest) {

        const _product = await prismaclient.product.findFirst({
            where: { code: code }
        })

        if (!!_product) {
 
            await prismaclient.product.updateMany({
                where: {
                    id: _product.id
                },
                data: {
                    stock: _product.stock + stock,
                    valueResale, 
                    valueRetail
                }
            })
            
        } else {

            await prismaclient.product.create({
                data: { code, ref, name, color, size, stock, valueResale, valueRetail }
            })

        }



    }
}

export { CreateProductService }