import prismaClient from '../../prisma';

interface OrcamentoRquest {
  ordemDeCompraID: string;
}

// Lista Orçamentos com base no numero do Pedido
class BuscaOrdemDeCompraServico {
  async execute({ ordemDeCompraID }: OrcamentoRquest) {

    return await prismaClient.ordemDeCompra.findFirst({
      where: {
        id: ordemDeCompraID
      },
      select: {
        usuario: {
          select: { id: true, nome: true, cargo: true }
        },
        id: true,
        formaDePagamento: true,
        observacao: true,
        itemDoPedido: {
          select: {
            quantidade: true, valorUnitario: true, produto: {
              select: {
                codigoDeBarras: true, cor: { select: { id: true, nome: true } }, estoque: true,
                id: true, nome: true, referencia: true, reservado: true,
                saida: true, tamanho: true, valorAtacado: true, valorVarejo: true
              }
            }
          }
        },
        criadoEm: true,
        estado: true,
        desconto: true,
        atualizadoEm: true,
        cliente: { select: { nome: true, bairro: true, cidade: true, id: true, cpf_cnpj: true, estado: true, dataNascimento: true, endereco: true, whatsapp: true, CEP: true } },
        totalDaNota: true,
        tempoDePagamento: true,
        valorAdiantado: true,
        valorPago: true,
        tipo: true,



      }
    });
  }
}

export { BuscaOrdemDeCompraServico };
