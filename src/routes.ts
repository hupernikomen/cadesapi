import { Router } from 'express';
import { CriaUsuarioControle } from './controles/usuario/CriaUsuarioControle'
import { LoginUsuarioControle } from './controles/usuario/LoginUsuarioControle';
import { CriaOrdemDeCompraControle } from './controles/ordemDeCompra/CriaOrdemDeCompraControle';
import { CriaClienteControle } from './controles/cliente/CriaClienteControle';
import { CriaItemDoPedidoControle } from './controles/itemDoPedido/CriaItemDoPedidoControle';
import { CriaProdutoControle } from './controles/produto/CriaProdutoControle';
import { ListaTodasAsOrdensDeCompraControle } from './controles/ordemDeCompra/ListaTodasAsOrdensDeCompraControle';
import { ListaTodosOsClientesControle } from './controles/cliente/ListaTodosOsClientesControle';
import { ListaTodosOsItensDoPedidoControle } from './controles/itemDoPedido/ListaTodosOsItensDoPedidoControle';
import { ListaTodosOsProdutosControle } from './controles/produto/ListaTodosOsProdutosControle';
import { BuscaClienteControle } from './controles/cliente/BuscaClienteControle';
import { BuscaProdutoPorReferenciaControle } from './controles/produto/BuscaProdutoPorReferenciaControle';
import { ExcluiOrdemDeCompraControle } from './controles/ordemDeCompra/ExcluiOrdemDeCompraControle';
import { AtualizaOrdemDeCompraControle } from './controles/ordemDeCompra/AtualizaOrdemDeCompraControle';
import { AtualizaEstoqueDoProdutoControle } from './controles/produto/AtualizaEstoqueDoProdutoControle';
import { AtualizaItemDoPedidoControle } from './controles/itemDoPedido/AtualizaItemDoPedidoControle';
import { ExcluiItemDoPedidoControle } from './controles/itemDoPedido/ExcluiItemDoPedidoControle';
import { CancelaOrdemDeCompraControle } from './controles/ordemDeCompra/CancelaOrdemDeCompraControle';
import { CriaCorControle } from './controles/cor/CriaCorControle';
import { ListaCorControle } from './controles/cor/ListaCorControle';
import { BuscaCorControle } from './controles/cor/BuscaCorControle';
import { BuscaOrdemDeCompraControle } from './controles/ordemDeCompra/BuscaOrdemDeCompraControle';
import { ListaUsuariosControle } from './controles/usuario/ListaUsuariosControle';
import { ExcluiProdutoControle } from './controles/produto/ExcluiProdutoControle';
import { ExcluiCorControle } from './controles/cor/ExcluiCorControle';
import { AtualizaClienteControle } from './controles/cliente/AtualizaClienteControle';
import { ExcluiUsuarioControle } from './controles/usuario/ExcluiUsuarioControle';
import { AtualizaProdutoControle } from './controles/produto/AtualizaProdutoControle';
import { BuscaProdutoPorCodigoControle } from './controles/produto/BuscaProdutoPorCodigoControle';
import { AtualizaCorControle } from './controles/cor/AtualizaCorControle';
import { AtualizaProdutoEmMassaControle } from './controles/produto/AtualizaProdutoEmMassaControle';
import { ListaErrosControle } from './controles/produto/ListaErrosControle';

import { Socio } from './intermediarios/socio';
import { Gerente } from './intermediarios/gerente';
import { Logado } from './intermediarios/logado';
import { BuscaItemDoPedidoControle } from './controles/itemDoPedido/BuscaItemDoPedidoControle';
import { CriaPagamentoControle } from './controles/pagamento/CriaPagamentoControle';
import { BuscaPagamentoControle } from './controles/pagamento/BuscaPagamentoControle';
import { AtualizaPagamentoControle } from './controles/pagamento/AtualizaPagamentoControle';
import { ListaPagamentosControle } from './controles/pagamento/ListaPagamentosControle';

const router = Router();

router.post('/criausuario', new CriaUsuarioControle().handle)
router.post('/login', new LoginUsuarioControle().handle)
router.post('/cria/ordemDeCompra', Logado, new CriaOrdemDeCompraControle().handle)
router.post('/registra/cliente', Gerente, new CriaClienteControle().handle)
router.post('/cria/itemDoPedido', Logado, new CriaItemDoPedidoControle().handle)
router.post('/cria/produto', Logado, new CriaProdutoControle().handle)
router.post('/criacor', Socio, new CriaCorControle().handle)
router.post('/cria/pagamento', Gerente, new CriaPagamentoControle().handle)

router.get('/lista/ordemDeCompras', new ListaTodasAsOrdensDeCompraControle().handle)
router.get('/busca/cliente', new BuscaClienteControle().handle)
router.get('/lista/clientes', new ListaTodosOsClientesControle().handle)
router.get('/busca/itemDoPedido', new ListaTodosOsItensDoPedidoControle().handle)
router.get('/busca/itensDoPedido', new BuscaItemDoPedidoControle().handle)
router.get('/lista/produtos', new ListaTodosOsProdutosControle().handle)
router.get('/busca/produto/referencia', new BuscaProdutoPorReferenciaControle().handle)
router.get('/busca/produto/codigo', new BuscaProdutoPorCodigoControle().handle)
router.get('/listaCores', new ListaCorControle().handle)
router.get('/busca/cor', new BuscaCorControle().handle)
router.get('/busca/ordemDeCompra', new BuscaOrdemDeCompraControle().handle)
router.get('/lista/usuarios', new ListaUsuariosControle().handle)
router.get('/listaerros', Socio, new ListaErrosControle().handle)
router.get('/busca/pagamento', new BuscaPagamentoControle().handle)
router.get('/lista/pagamentos', new ListaPagamentosControle().handle)

router.delete('/deleta/ordemDeCompra',  new ExcluiOrdemDeCompraControle().handle)
router.delete('/deleta/itemDoPedido', Gerente, new ExcluiItemDoPedidoControle().handle)
router.delete('/deleta/produto', Socio, new ExcluiProdutoControle().handle)
router.delete('/cancelaCompra', Socio, new CancelaOrdemDeCompraControle().handle)
router.delete('/deleta/usuario', Socio, new ExcluiUsuarioControle().handle)
router.delete('/deleta/cor', Socio, new ExcluiCorControle().handle)

router.put('/atualiza/ordemDeCompra', Logado, new AtualizaOrdemDeCompraControle().handle)
router.put('/atualiza/estoque', Logado, new AtualizaEstoqueDoProdutoControle().handle)
router.put('/atualiza/itemDoPedido', Gerente, new AtualizaItemDoPedidoControle().handle)
router.put('/atualiza/cliente', Gerente, new AtualizaClienteControle().handle)
router.put('/atualiza/produto', Gerente, new AtualizaProdutoControle().handle)
router.put('/atualiza/cor', Socio, new AtualizaCorControle().handle)
router.put('/atualiza/produtosEmMassa', Socio, new AtualizaProdutoEmMassaControle().handle)
router.put('/atualiza/pagamento', Gerente, new AtualizaPagamentoControle().handle)

export { router };