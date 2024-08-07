import prismaclient from "../../prisma";

interface SalesformRequest {
    ordemDeCompraID: string;
    estado: string;
    formaDePagamento: string,
    valorPago: number,
    tempoDePagamento: string,
    valorAdiantado: number,
    observacao: string
}

class AtualizaOrdemDeCompraServico {
    async execute({ ordemDeCompraID, estado, formaDePagamento, valorPago, tempoDePagamento, valorAdiantado, observacao }: SalesformRequest) {

        await prismaclient.ordemDeCompra.updateMany({
            where: {
                id: ordemDeCompraID
            },
            data: {
                estado: estado,
                formaDePagamento: formaDePagamento,
                valorPago: valorPago,
                tempoDePagamento: tempoDePagamento,
                valorAdiantado: valorAdiantado,
                observacao: observacao,
                atualizadoEm: new Date()
            }
        })
    }
}

export { AtualizaOrdemDeCompraServico }