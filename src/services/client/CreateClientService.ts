import prismaclient from "../../prisma";

interface ClientRequest {
    cpf_cnpj: string;
    name: string;
    address: string;
    district: string;
    city: string;
    uf: string;
    whatsapp: string;
    birthDate: string
}

class CreateClientService {
    async execute({ cpf_cnpj, name, address, district, city, uf, whatsapp, birthDate }: ClientRequest) {

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
                address, 
                district, 
                city, 
                uf: uf.toUpperCase(),
                whatsapp, 
                birthDate
            }
        })

        return _client
    }
}

export { CreateClientService }