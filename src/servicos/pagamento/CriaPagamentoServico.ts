import prismaclient from "../../prisma";

interface DadosDoPagamento {
  parcelas: number;
  desconto: number;
  totalDaNota: number;
  valorAdiantado: number;
  totalPago: number;
  obs: string;
  tipo: string;
  ordemDeCompraID: string
}

class CriaPagamentoServico {
  async execute({ parcelas, desconto, totalDaNota, valorAdiantado, totalPago, obs,tipo, ordemDeCompraID }: DadosDoPagamento) {

    const ordemDeCompraEncontrado = await prismaclient.ordemDeCompra.findFirst({
      where: {
        id: ordemDeCompraID
      }
    })

    const pagamento = await prismaclient.pagamento.findFirst({
      where: {
        ordemDeCompraID: ordemDeCompraID
      }
    })

    if (!ordemDeCompraEncontrado) {
      throw new Error("Ordem de Compra não cadastrado");
    }
    if (!!pagamento) {
      throw new Error("Pagamento ja registrado");
    }





    const pagamentoCriado = await prismaclient.pagamento.create({
      data: {
        
        parcelas, 
        desconto, 
        totalDaNota, 
        valorAdiantado, 
        totalPago, 
        obs,
        tipo,
        ordemDeCompraID
      }
    })


    return pagamentoCriado
  }
}

export { CriaPagamentoServico }