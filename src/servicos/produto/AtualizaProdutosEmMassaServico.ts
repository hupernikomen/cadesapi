import prismaclient from "../../prisma";

interface DadosDoProduto {
  detalhes: string;
  referencia: string,
}

// Movimentação para retirada definitiva do estoque
class AtualizaProdutosEmMassaServico {
  async execute({ referencia, detalhes, }: DadosDoProduto) {

    const produto = await prismaclient.produto.findFirst({
      where: {
        referencia: referencia
      }
    })

    if (!produto) {
      throw new Error("Produto não encontrado");
      
    }

    await prismaclient.produto.updateMany({
      where: {
        referencia: referencia,
      },
      data: {
        detalhes,
      }
    })


  }
}

export { AtualizaProdutosEmMassaServico }