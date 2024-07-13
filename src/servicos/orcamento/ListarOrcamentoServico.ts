import prismaClient from '../../prisma';

interface OrcamentoRquest {
  pedidoId: string;
}

// Lista Orçamentos com base no numero do Pedido
class ListarOrcamentoServico {
  async execute({ pedidoId }: OrcamentoRquest) {
    return await prismaClient.orcamento.findMany({
      where: {
        pedidoId: pedidoId
      },
      select:{
        Produto:true,
        id:true,
        cor:true,
        createdAt:true,
        preco:true,
        quantidade:true,
        tamanho:true,
        referencia:true,
      }
    });
  }
}

export { ListarOrcamentoServico };