import prismaClient from '../../prisma';

class ListaTodosOsClientesService {
  async execute() {
    return await prismaClient.cliente.findMany({
      where:{
        cpf_cnpj: {
          not: '000.000.000-00'
        }
      }
    });
  }
}

export { ListaTodosOsClientesService };