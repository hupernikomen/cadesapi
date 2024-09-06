import prismaclient from "../../prisma";

interface SalesformRequest {
    tipo: string;
    ordemDeCompraID: string;
    estado: string;
    totalDaNota: number,
    formaDePagamento: string,
    valorPago: number,
    tempoDePagamento: string,
    valorAdiantado: number,
    observacao: string;
    desconto: number
}

class AtualizaOrdemDeCompraServico {
    async execute({ tipo, ordemDeCompraID, estado, totalDaNota, formaDePagamento, valorPago, tempoDePagamento, valorAdiantado, observacao, desconto }: SalesformRequest) {
        

        await prismaclient.ordemDeCompra.updateMany({
            where: {
                id: ordemDeCompraID
            },
            data: {
                tipo,
                estado,
                formaDePagamento,
                totalDaNota,
                valorPago,
                tempoDePagamento,
                valorAdiantado,
                desconto,
                observacao,
                atualizadoEm: new Date(),
            }
        })
    }
}

export { AtualizaOrdemDeCompraServico }