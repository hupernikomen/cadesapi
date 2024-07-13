import prismaClient from '../../prisma';

interface ClienteRequest {
    cpf: string
}

class ListarClienteServico {
    async execute({ cpf }: ClienteRequest) {

        
        return await prismaClient.cliente.findFirst({
            where: {
                cpf: cpf
            }
        });
    }
}

export { ListarClienteServico };