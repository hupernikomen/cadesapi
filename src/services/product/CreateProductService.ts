import prismaclient from "../../prisma";

interface ProductRequest {
    code: string,
    ref: string;
    name: string;
    color: string;
    size: string;
    add: number;
    valueResale: string;
    valueRetail: string
}

class CreateProductService {
    async execute({ code, ref, name, color, size, add, valueResale, valueRetail }: ProductRequest) {

        const existe = await prismaclient.product.findFirst({
            where: { code: code }
        })

        if (existe)
            throw new Error("Referencia já cadastrada");


        const product = await prismaclient.product.create({
            data: { code, ref, name, color, size, add, valueResale, valueRetail }
        })

        return product
    }
}

export { CreateProductService }