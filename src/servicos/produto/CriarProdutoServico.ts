import prismaclient from "../../prisma";

interface ProdutoRequest {
    codigo: string,
    referencia: string;
    nome: string;
    cor: string;
    tamanho: string;
    entrada: number;
    valorAtacado: string;
    valorVarejo: string
}

class CriarProdutoServico {
    async execute({ codigo, referencia, nome, cor, tamanho, entrada, valorAtacado, valorVarejo }: ProdutoRequest) {

        const existe = await prismaclient.produto.findFirst({
            where: {
                codigo: codigo
            }
        })

        if (existe) {
            throw new Error("Referencia já cadastrada");
        }

        const produto = await prismaclient.produto.create({
            data: {
                codigo,
                referencia,
                nome,
                cor,
                tamanho,
                entrada,
                valorAtacado,
                valorVarejo
            }
        })

        return produto
    }
}

export { CriarProdutoServico }