import prismaClient from '../../prisma';

class ListaUsuariosServico {
  async execute() {
    return await prismaClient.usuario.findMany();
  }
}

export { ListaUsuariosServico };