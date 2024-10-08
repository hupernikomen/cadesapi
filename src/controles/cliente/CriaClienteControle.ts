import { Request, Response, response } from 'express'
import { CriaClienteServico } from '../../servicos/cliente/CriaClienteServico'

class CriaClienteControle {
    async handle(req: Request, res: Response) {
        const { cpf_cnpj, nome, nomeFantasia, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP } = req.body

        const criaClienteServico = new CriaClienteServico()
        const oCliente = await criaClienteServico.execute({ cpf_cnpj, nome, nomeFantasia, endereco, bairro, cidade, estado, whatsapp, dataNascimento, inscricaoEstadualRg, CEP })

        return res.json(oCliente)
    }
}

export { CriaClienteControle }