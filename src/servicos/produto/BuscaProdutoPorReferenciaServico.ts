import prismaClient from '../../prisma';

interface DadosDoProduto {
    referencia: string;
}

class BuscaProdutoPorReferenciaServico {
    async execute({ referencia }: DadosDoProduto) {
        return await prismaClient.produto.findMany({
            where: {
                referencia: referencia,
            },
            select: {
                cor: { select: { nome: true, codigo: true, id: true,corHexa:true } },
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

export { BuscaProdutoPorReferenciaServico };