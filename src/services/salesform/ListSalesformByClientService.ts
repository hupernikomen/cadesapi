import prismaClient from '../../prisma';

interface OrcamentoRquest {
    clientID: string;
}

// Lista Orçamentos com base no numero do Pedido
class ListSalesformByClientService {
  async execute({ clientID }: OrcamentoRquest) {

    return await prismaClient.salesForm.findMany({
      where: {
        clientID: clientID
      },
      select: {
        collaborator: {
          select: { id:true, name: true, type:true }
        },
        id:true,
        createdAt:true,
        state:true,
      
      }
    });
  }
}

export { ListSalesformByClientService };
