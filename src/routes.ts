import { Router } from 'express';
import { CriarUsuarioControle } from './controles/usuario/CriarUsuarioControle'
import { LoginUsuarioControle } from './controles/usuario/LoginUsuarioControle';
import { DashboardControle } from './controles/sistema/DashboardControle';
import { CriarPedidoControle } from './controles/pedido/CriarPedidoControle';
import { CriarClienteControle } from './controles/cliente/CriarClienteControle';
import { CriarOrcamentoControle } from './controles/orcamento/CriarOrcamentoControle';
import { CriarProdutoControle } from './controles/produto/CriarProdutoControle';
import { ListaPedidosControle } from './controles/pedido/ListaPedidosControle';
import { ListarClientesControle } from './controles/cliente/ListarClientesControle';
import { ListarOrcamentoControle } from './controles/orcamento/ListarOrcamentoControle';
import { ListarPedidosClienteControle } from './controles/pedido/ListarPedidosClienteControle';
import { ListarProdutosControle } from './controles/produto/ListarProdutosControle';
import { ListarClienteControle } from './controles/cliente/ListarClienteControle';
import { ListarProdutoCodControle } from './controles/produto/ListarProdutoCodControle';
import { ListarProdutoRefControle } from './controles/produto/ListarProdutoRefControle';

import { proprietario } from './intermediarios/proprietario';
import { gerente } from './intermediarios/gerente';
import { logado } from './intermediarios/logado';

const router = Router();

router.post('/usuario', proprietario, new CriarUsuarioControle().handle)
router.post('/login', new LoginUsuarioControle().handle)
router.post('/pedido', logado, new CriarPedidoControle().handle)
router.post('/cliente', gerente, new CriarClienteControle().handle)
router.post('/orcamento',logado, new CriarOrcamentoControle().handle)
router.post('/produto', gerente, new CriarProdutoControle().handle)

router.get('/dashboard', gerente, new DashboardControle().handle)
router.get('/pedidos', new ListaPedidosControle().handle)
router.get('/cliente', new ListarClienteControle().handle)
router.get('/clientes', new ListarClientesControle().handle)
router.get('/orcamentos/pedido', new ListarOrcamentoControle().handle)
router.get('/pedidos/cliente', new ListarPedidosClienteControle().handle)
router.get('/produtos', new ListarProdutosControle().handle)
router.get('/produto/codigo', new ListarProdutoCodControle().handle)
router.get('/produto/referencia', new ListarProdutoRefControle().handle)

export { router };