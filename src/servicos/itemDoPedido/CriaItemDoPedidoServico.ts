import prismaclient from "../../prisma";

interface DadosDoItemDoPedido {
    quantidade: number;
    ordemDeCompraID: string;
    produtoID: string
}

class CriaItemDoPedidoServico {
    async execute({ quantidade, ordemDeCompraID, produtoID }: DadosDoItemDoPedido) {

        const produtoEncontrado = await prismaclient.produto.findFirst({
            where: {
                id: produtoID
            }
        })

        if (!produtoEncontrado) {
            throw new Error("Produto não cadastrado");
        }


        if((produtoEncontrado.estoque - (produtoEncontrado.reservado + produtoEncontrado.saida)) < quantidade) {
            throw new Error("Estoque Insuficiente");
            
        }


        const itemDoPedidoCriado = await prismaclient.itemDoPedido.create({
            data: {
                quantidade,
                produtoID: produtoID,
                ordemDeCompraID: ordemDeCompraID,
                valorUnitario: parseFloat(produtoEncontrado.valorAtacado.replace(',', '.')),
                total: parseFloat(produtoEncontrado.valorAtacado.replace(',', '.')),
            }
        })

        return itemDoPedidoCriado
    }
}

export { CriaItemDoPedidoServico }