import prismaClient from '../../prisma';

interface DadosDoCliente {
    clienteID: string
}

class BuscaClienteServico {
    async execute({ clienteID }: DadosDoCliente) {
        
        return await prismaClient.cliente.findFirst({
            where: {
                id: clienteID
            }
        });
    }
}

export { BuscaClienteServico };