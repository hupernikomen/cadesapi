import prismaClient from '../../prisma';

interface DadosDoPagamento {
  ordemDeCompraID: string
}

class BuscaPagamentoServico {
    async execute({ ordemDeCompraID }: DadosDoPagamento) {
        
        return await prismaClient.pagamento.findFirst({
            where: {
              ordemDeCompraID: ordemDeCompraID
            },
            
        });
    }
}

export { BuscaPagamentoServico };