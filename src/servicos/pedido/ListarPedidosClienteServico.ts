import prismaClient from '../../prisma';

interface OrcamentoRquest {
    clienteId: string;
}

// Lista Orçamentos com base no numero do Pedido
class ListarPedidosClienteServico {
  async execute({ clienteId }: OrcamentoRquest) {

    return await prismaClient.pedido.findMany({
      where: {
        clienteId: clienteId
      },
      select: {
        Usuario: {
          select: { id:true, nome: true, tipo:true }
        },
        id:true,
        createdAt:true,
        status:true,
      
      }
    });
  }
}

export { ListarPedidosClienteServico };
