import { Request, Response, response } from 'express'
import { AtualizaClienteServico } from '../../servicos/cliente/AtualizaClienteServico'

class AtualizaClienteControle {
    async handle(req: Request, res: Response) {
        const clienteID = req.query.clienteID as string

        const { cpf_cnpj, nome, nomeFantasia, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP } = req.body

        const atualizaClienteServico = new AtualizaClienteServico()
        const itemDoPedidoAtualizado = await atualizaClienteServico.execute({ cpf_cnpj, nome, nomeFantasia, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP, clienteID })

        return res.json(itemDoPedidoAtualizado)
    }
}

export { AtualizaClienteControle }