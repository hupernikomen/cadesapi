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

        const existe = await prismaclient.product.findFirst({
            where: { code: code }
        })

        if (existe)
            throw new Error("Referencia já cadastrada");


        const product = await prismaclient.product.create({
            data: { code, ref, name, color, size, stock, valueResale, valueRetail }
        })

        return product
    }
}

export { CreateProductService }