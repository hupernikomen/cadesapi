import prismaClient from '../../prisma';

interface DadosDoProduto {
    codigoDeBarras: string;
}

class BuscaProdutoPorCodigoServico {
    async execute({ codigoDeBarras }: DadosDoProduto) {
        return await prismaClient.produto.findMany({
            where: {
                codigoDeBarras: codigoDeBarras,
            },
            select: {
                cor: { select: { nome: true, codigo: true, id: true } },
                codigoDeBarras: true,
                estoque: true,
                id: true,
                nome: true,
                itemDoPedido: true,
                referencia: true,
                reservado: true,
                saida: true,
                tamanho: true,
                valorAtacado: true,
                valorVarejo: true,
                atualizadoEm: true,
                criadoEm: true
            }
        });
    }
}

export { BuscaProdutoPorCodigoServico };