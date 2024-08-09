import { Router } from 'express';
import { CriaUsuarioControle } from './controles/usuario/CriaUsuarioControle'
import { LoginUsuarioControle } from './controles/usuario/LoginUsuarioControle';
import { DashboardControle } from './controles/system/DashboardControle';
import { CriaOrdemDeCompraControle } from './controles/ordemDeCompra/CriaOrdemDeCompraControle';
import { CriaClienteControle } from './controles/cliente/CriaClienteControle';
import { CriaItemDoPedidoControle } from './controles/itemDoPedido/CriaItemDoPedidoControle';
import { CriaProdutoControle } from './controles/produto/CriaProdutoControle';
import { ListaTodasAsOrdensDeCompraControle } from './controles/ordemDeCompra/ListaTodasAsOrdensDeCompraControle';
import { ListaTodosOsClientesControle } from './controles/cliente/ListaTodosOsClientesControle';
import { ListaTodosOsItensDoPedidoControle } from './controles/itemDoPedido/ListaTodosOsItensDoPedidoControle';
import { ExcluiOrdemDeCompraServico } from './controles/ordemDeCompra/BuscaOrdemDeCompraDoClienteControle';
import { ListaTodosOsProdutosControle } from './controles/produto/ListaTodosOsProdutosControle';
import { BuscaClienteControle } from './controles/cliente/BuscaClienteControle';
import { ListProductByCodeControl } from './controles/produto/ListProductByCodeControl';
import { BuscaProdutoPorReferenciaControle } from './controles/produto/BuscaProdutoPorReferenciaControle';
import { ExcluiOrdemDeCompraControle } from './controles/ordemDeCompra/ExcluiOrdemDeCompraControle';
import { AtualizaOrdemDeCompraControle } from './controles/ordemDeCompra/AtualizaOrdemDeCompraControle';
import { AtualizaEstoqueDoProdutoControle } from './controles/produto/AtualizaEstoqueDoProdutoControle';
import { AtualizaItemDoPedidoControle } from './controles/itemDoPedido/AtualizaItemDoPedidoControle';
// import { AdicionaProdutoControle } from './controles/produto/AdicionaProdutoControle';
import { ExcluiItemDoPedidoControle } from './controles/itemDoPedido/ExcluiItemDoPedidoControle';
import { ListarProductUniqueRefControl } from './controles/produto/ListarProductUniqueRefControl';
import { CancelaOrdemDeCompraControle } from './controles/ordemDeCompra/CancelaOrdemDeCompraControle';
import { CriaCorControle } from './controles/cor/CriaCorControle';


import { Socio } from './intermediarios/socio';
import { Gerente } from './intermediarios/gerente';
import { Logado } from './intermediarios/logado';

const router = Router();

router.post('/criausuario', new CriaUsuarioControle().handle)
router.post('/login', new LoginUsuarioControle().handle)
router.post('/cria/ordemDeCompra', Logado, new CriaOrdemDeCompraControle().handle)
router.post('/registra/cliente', Gerente, new CriaClienteControle().handle)
router.post('/cria/itemDoPedido', Logado, new CriaItemDoPedidoControle().handle)
router.post('/cria/produto', Logado, new CriaProdutoControle().handle)
router.post('/criaCor', Socio, new CriaCorControle().handle)

router.get('/dashboard', Gerente, new DashboardControle().handle)
router.get('/lista/ordemDeCompras', new ListaTodasAsOrdensDeCompraControle().handle)
router.get('/busca/cliente', new BuscaClienteControle().handle)
router.get('/lista/clientes', new ListaTodosOsClientesControle().handle)
router.get('/busca/itemDoPedido', new ListaTodosOsItensDoPedidoControle().handle)
router.get('/getsalesform/client', new ExcluiOrdemDeCompraServico().handle)
router.get('/lista/produtos', new ListaTodosOsProdutosControle().handle)
router.get('/getproduct/code', new ListProductByCodeControl().handle)
router.get('/busca/produto/referencia', new BuscaProdutoPorReferenciaControle().handle)
router.get('/getproduct/unique/ref', new ListarProductUniqueRefControl().handle)

router.delete('/deleta/ordemDeCompra', Gerente, new ExcluiOrdemDeCompraControle().handle)
router.delete('/deleta/itemDoPedido', Gerente, new ExcluiItemDoPedidoControle().handle)
router.delete('/cancelaCompra', Socio, new CancelaOrdemDeCompraControle().handle)

router.put('/atualiza/ordemDeCompra', Logado, new AtualizaOrdemDeCompraControle().handle)
router.put('/atualiza/estoque', Logado, new AtualizaEstoqueDoProdutoControle().handle)
router.put('/atualiza/itemDoPedido', Logado, new AtualizaItemDoPedidoControle().handle)
// router.put('/product/add', Socio, new AdicionaProdutoControle().handle)

export { router };