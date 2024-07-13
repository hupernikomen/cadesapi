import prismaclient from "../../prisma";

interface OrcamentoRequest {
    quantidade: number;
    pedidoId: string;
    referencia: string,
    cor: string;
    tamanho: string
}

class CriarOrcamentoServico {
    async execute({ quantidade, referencia, pedidoId, cor, tamanho }: OrcamentoRequest) {

        const produto = await prismaclient.produto.findFirst({
            where: {
                referencia: referencia,
                cor: cor,
                tamanho: tamanho
            }
        })

        if (!produto) {
            throw new Error("Produto não cadastrado");
        }

        if (produto.entrada < (produto.saida + quantidade)) {
            throw new Error("Estoque Insuficiente");
        }




        const orcamento = await prismaclient.orcamento.create({
            data: {
                referencia: referencia,
                quantidade,
                produtoId: produto.id,
                pedidoId,
                preco: produto.valorAtacado,
                cor,
                tamanho
            }
        })

        // Atualizar estoque
        await prismaclient.produto.updateMany({
            where: {
                id: produto.id,
            },
            data: {
                separado: produto.saida + quantidade
            }
        })

        return orcamento
    }
}

export { CriarOrcamentoServico }