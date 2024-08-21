import prismaclient from "../../prisma";

interface DadosDoCliente {
    cpf_cnpj: string;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    whatsapp: string;
    dataNascimento: string;
    inscricaoEstadualRg: string;
    CEP: string
}

class CriaClienteServico {
    async execute({ cpf_cnpj, nome, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP }: DadosDoCliente) {

        const clienteEncontrado = await prismaclient.cliente.findFirst({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        })

        if (clienteEncontrado) {
            throw new Error("Cliente já cadastrado");
        }

        const clienteCriado = await prismaclient.cliente.create({
            data: {
                cpf_cnpj, 
                nome, 
                endereco, 
                bairro, 
                cidade, 
                estado: estado.toUpperCase(),
                whatsapp, 
                dataNascimento,
                inscricaoEstadualRg, 
                CEP
            }
        })

        return clienteCriado
    }
}

export { CriaClienteServico }