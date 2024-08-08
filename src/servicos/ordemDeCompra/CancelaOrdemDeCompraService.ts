import prismaclient from "../../prisma";

interface StockRequest {
    ordemDeCompraID: string;
}

class CancelaOrdemDeCompraService {
    async execute({ ordemDeCompraID }: StockRequest) {

        // BUSCA TODOS OS ITENS DA ORDEM DE COMPRA A SEREM CANCELADOS
        const itensParaCancelamento = await prismaclient.itemDoPedido.findMany({
            where:{
                ordemDeCompraID: ordemDeCompraID
            }
        })

        // VARRE UM A UM OS ITENS, ENCONTRA OS PRODUTOS REFERENTES E ATUALIZA O ESTOQUE RESERVADO
        itensParaCancelamento.forEach(async(item) => {
            const produto = await prismaclient.produto.findFirst({
                where: {
                    id: item.produtoID
                }
            })

            await prismaclient.produto.updateMany({
                where: {
                    id: item.produtoID
                },
                data: {
                    reservado: produto.reservado -  item.quantidade
                }
            })



            await prismaclient.itemDoPedido.delete({
                where: {
                    id: item.id,
                }
            })


        })


        



    }
}

export { CancelaOrdemDeCompraService }