import prismaClient from '../../prisma';

interface DadosDoCliente {
  ordemDeCompraID: string
}

class BuscaItemDoPedidoServico {
    async execute({ ordemDeCompraID }: DadosDoCliente) {
        
        return await prismaClient.itemDoPedido.findMany({
            where: {
              ordemDeCompraID: ordemDeCompraID
            },
            select:{
              id:true,quantidade:true,ordemDeCompraID:true,
              produtoID:true
            }
        });
    }
}

export { BuscaItemDoPedidoServico };