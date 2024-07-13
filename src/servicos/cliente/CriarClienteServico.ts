import prismaclient from "../../prisma";

interface ClienteRequest {
    cpf: string;
    nome: string;
    endereco: string;
    whatsapp: string;
    dataNascimento: string
}

class CriarClienteServico {
    async execute({ cpf, nome, endereco, whatsapp, dataNascimento }: ClienteRequest) {

        const existe = await prismaclient.cliente.findFirst({
            where: {
                cpf: cpf
            }
        })

        if (existe) {
            throw new Error("Cliente já cadastrado");
        }

        const cliente = await prismaclient.cliente.create({
            data: {
                cpf,
                nome,
                endereco,
                whatsapp,
                dataNascimento
            }
        })

        return cliente
    }
}

export { CriarClienteServico }