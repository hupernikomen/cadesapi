import prismaclient from "../../prisma";

interface ClientRequest {
    cpf_cnpj: string;
    name: string;
    country: string;
    whatsapp: string;
    birthDate: string
}

class CreateClientService {
    async execute({ cpf_cnpj, name, country, whatsapp, birthDate }: ClientRequest) {


        

        const _registerclient = await prismaclient.client.findFirst({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        })

        if (_registerclient) {
            throw new Error("Cliente já cadastrado");
        }

        const _client = await prismaclient.client.create({
            data: {
                cpf_cnpj, 
                name, 
                country, 
                whatsapp, 
                birthDate
            }
        })

        return _client
    }
}

export { CreateClientService }