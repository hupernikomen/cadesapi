import prismaclient from "../../prisma";

interface DadosDoItemDoPedido {
    quantidade: number;
    produtoID: string,
    itemDoPedidoID: string
}

// Movimentação para retirada definitiva do estoque
class AtualizaItemDoPedidoServico {
    async execute({ quantidade, produtoID, itemDoPedidoID }: DadosDoItemDoPedido) {

        const produtoEncontrado = await prismaclient.produto.findFirst({
            where: {
                id: produtoID
            }
        })

        if((produtoEncontrado.estoque - (produtoEncontrado.reservado + produtoEncontrado.saida)) < quantidade) {
            throw new Error("Estoque Insuficiente");
            
        }

        // BUSCA PEDIDO INFORMADO
        const itemDoPedidoEncontrado = await prismaclient.itemDoPedido.findFirst({
            where: {
                id: itemDoPedidoID,
            }
        })

        if (!itemDoPedidoEncontrado) {
            throw new Error("Item não encontrado");

        }

        await prismaclient.itemDoPedido.updateMany({
            where: {
                id: itemDoPedidoID,
            },
            data: {
                produtoID: produtoID,
                quantidade: quantidade,
                total: quantidade * itemDoPedidoEncontrado.valorUnitario
            }
        })


    }
}

export { AtualizaItemDoPedidoServico }