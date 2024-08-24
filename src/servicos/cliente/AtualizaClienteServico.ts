import prismaclient from "../../prisma";

interface DadosDoCliente {
    cpf_cnpj: string, nome: string, endereco: string, bairro: string, cidade: string, estado: string, whatsapp: string, dataNascimento: string, inscricaoEstadualRg: string, CEP: string, clienteID: string
}

// Movimentação para retirada definitiva do estoque
class AtualizaClienteServico {
    async execute({ cpf_cnpj,nome, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP, clienteID }: DadosDoCliente) {

        await prismaclient.cliente.updateMany({
            where: {
                id: clienteID,
            },
            data: {
                cpf_cnpj,nome, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP
            }
        })


    }
}

export { AtualizaClienteServico }