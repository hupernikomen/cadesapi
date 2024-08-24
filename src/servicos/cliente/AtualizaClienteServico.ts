import prismaclient from "../../prisma";

interface DadosDoCliente {
    nome: string, endereco: string, bairro: string, cidade: string, estado: string, whatsapp: string, dataNascimento: string, inscricaoEstadualRg: string, CEP: string, clienteID: string
}

// Movimentação para retirada definitiva do estoque
class AtualizaClienteServico {
    async execute({ nome, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP, clienteID }: DadosDoCliente) {

        await prismaclient.cliente.updateMany({
            where: {
                id: clienteID,
            },
            data: {
                nome, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP
            }
        })


    }
}

export { AtualizaClienteServico }