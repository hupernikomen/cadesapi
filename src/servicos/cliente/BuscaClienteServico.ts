import prismaClient from '../../prisma';

interface DadosDoCliente {
    cpf_cnpj: string
}

class BuscaClienteServico {
    async execute({ cpf_cnpj }: DadosDoCliente) {
        
        return await prismaClient.cliente.findFirst({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        });
    }
}

export { BuscaClienteServico };