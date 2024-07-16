import prismaClient from '../../prisma';

interface ClientRequest {
    cpf_cnpj: string
}

class ListClientService {
    async execute({ cpf_cnpj }: ClientRequest) {

        
        return await prismaClient.client.findFirst({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        });
    }
}

export { ListClientService };