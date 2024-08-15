import prismaClient from '../../prisma';

class ListaTodosOsProdutosServico {
  async execute() {
    return await prismaClient.produto.findMany({
      select:{
        cor:{select:{nome:true}},
        atualizadoEm:true,
        codigoDeBarras:true,
        criadoEm:true,
        nome:true,
        referencia:true,
        valorAtacado:true,
        valorVarejo:true,
        tamanho:true,
        saida:true,
        reservado:true,
        id:true,
        corID:true,
        estoque:true,
        itemDoPedido:true
      }
    });
  }
}

export { ListaTodosOsProdutosServico };