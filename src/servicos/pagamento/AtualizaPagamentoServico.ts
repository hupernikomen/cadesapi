import prismaclient from "../../prisma";

interface DadosDoItemDoPedido {
  ordemDeCompraID: string,
  parcelas: number;
  desconto: number;
  totalDaNota: number;
  valorAdiantado: number;
  totalPago: number;
  obs: string;
  tipo: string;
}

class AtualizaPagamentoServico {
  async execute({ parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs, tipo, ordemDeCompraID }: DadosDoItemDoPedido) {

    await prismaclient.pagamento.updateMany({
      where: {
        ordemDeCompraID: ordemDeCompraID,
      },
      data: {
        parcelas, 
        desconto, 
        totalDaNota, 
        valorAdiantado, 
        totalPago, 
        obs,
        tipo
      }
    })
  }
}

export { AtualizaPagamentoServico }