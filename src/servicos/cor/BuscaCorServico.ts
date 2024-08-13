import prismaClient from '../../prisma';

interface DadosDoCliente {
    corID: string
}

class BuscaCorServico {
    async execute({ corID }: DadosDoCliente) {
        
        return await prismaClient.cor.findFirst({
            where: {
                id: corID
            }
        });
    }
}

export { BuscaCorServico };