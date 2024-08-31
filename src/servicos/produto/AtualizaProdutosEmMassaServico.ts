import prismaclient from "../../prisma";

interface DadosDoProduto {
  detalhes: string;
  referencia: string,
}

// Movimentação para retirada definitiva do estoque
class AtualizaProdutosEmMassaServico {
  async execute({ referencia, detalhes, }: DadosDoProduto) {

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