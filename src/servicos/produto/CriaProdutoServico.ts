import prismaclient from "../../prisma";

interface ProductRequest {
    codigoDeBarras: string,
    referencia: string;
    nome: string;
    corID: string;
    tamanho: string;
    estoque: number;
    valorAtacado: string;
    valorVarejo: string
}

class CriaProdutoServico {
    async execute({ codigoDeBarras, referencia, nome, corID, tamanho, estoque, valorAtacado, valorVarejo }: ProductRequest) {
        const formattedNome = nome.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
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
                    nome: formattedNome, 
                    corID, 
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