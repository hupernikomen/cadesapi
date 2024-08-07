import prismaclient from "../../prisma";

interface ProductRequest {
    codigoDeBarras: string,
    referencia: string;
    nome: string;
    cor: string;
    tamanho: string;
    estoque: number;
    valorAtacado: string;
    valorVarejo: string
}

class CriaProdutoServico {
    async execute({ codigoDeBarras, referencia, nome, cor, tamanho, estoque, valorAtacado, valorVarejo }: ProductRequest) {

        const produtoEncontrado = await prismaclient.produto.findFirst({
            where: { codigoDeBarras: codigoDeBarras }
        })

        if (!!produtoEncontrado) {
 
            await prismaclient.produto.updateMany({
                where: {
                    id: produtoEncontrado.id
                },
                data: {
                    estoque: produtoEncontrado.estoque + estoque,
                    valorAtacado, 
                    valorVarejo,
                    atualizadoEm: new Date()
                }
            })
            
        } else {

            await prismaclient.produto.create({
                data: { 
                    codigoDeBarras, 
                    referencia, 
                    nome, 
                    cor, 
                    tamanho, 
                    estoque, 
                    valorAtacado, 
                    valorVarejo 
                }
            })

        }



    }
}

export { CriaProdutoServico }