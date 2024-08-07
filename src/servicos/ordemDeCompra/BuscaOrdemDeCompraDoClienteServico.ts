import prismaClient from '../../prisma';

interface OrcamentoRquest {
  clienteID: string;
}

// Lista Orçamentos com base no numero do Pedido
class BuscaOrdemDeCompraDoClienteServico {
  async execute({ clienteID }: OrcamentoRquest) {

    return await prismaClient.ordemDeCompra.findMany({
      where: {
        clienteID: clienteID
      },
      select: {
        usuario: {
          select: { id: true, nome: true, cargo: true }
        },
        id: true,
        formaDePagamento: true,
        observacao: true,
        itemDoPedido: { select: { valorUnitario: true, total:true } },
        criadoEm: true,
        estado: true,

      }
    });
  }
}

export { BuscaOrdemDeCompraDoClienteServico };
