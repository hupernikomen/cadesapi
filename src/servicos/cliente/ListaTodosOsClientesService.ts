import prismaClient from '../../prisma';

class ListaTodosOsClientesService {
  async execute() {
    return await prismaClient.cliente.findMany({
      where:{
        cpf_cnpj: {
          not: '15.302.980/0001-54'
        }
      }
    });
  }
}

export { ListaTodosOsClientesService };