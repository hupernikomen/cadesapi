import { Router } from 'express';
import { CreateCollaboratorControl } from './controls/collaborator/CreateCollaboratorControl'
import { LoginCollaboratorControl } from './controls/collaborator/LoginCollaboratorControl';
import { DashboardControle } from './controls/system/DashboardControle';
import { CreateSalesformControl } from './controls/salesform/CreateSalesformControl';
import { CreateClientControl } from './controls/client/CreateClientControl';
import { CreateBudgetControl } from './controls/budget/CreateBudgetControl';
import { CreateProductControl } from './controls/product/CreateProductControl';
import { ListAllSalesformControl } from './controls/salesform/ListAllSalesformControl';
import { ListAllClientsControl } from './controls/client/ListAllClientsControl';
import { ListBudgetControl } from './controls/budget/ListBudgetControl';
import { ListSalesformByClientControl } from './controls/salesform/ListSalesformByClientControl';
import { ListAllProductsControl } from './controls/product/ListAllProductsControl';
import { ListClientControl } from './controls/client/ListClientControl';
import { ListProductByCodeControl } from './controls/product/ListProductByCodeControl';
import { ListarProductByRefControl } from './controls/product/ListarProductByRefControl';
import { DelSalesformControl } from './controls/salesform/DelSalesformControl';
import { PutSalesformControl } from './controls/salesform/PutSalesformControl';
import { UpdateStockControl } from './controls/product/UpdateStockControl';
import { UpdateBudgetControl } from './controls/budget/UpdateBudgetControl';
import { AddProductControl } from './controls/product/AddProductControl';
import { DelBudgetControl } from './controls/budget/DelBudgetControl';
import { ListarProductUniqueRefControl } from './controls/product/ListarProductUniqueRefControl';

import { Owner } from './middlewares/owner';
import { Manager } from './middlewares/manager';
import { Logged } from './middlewares/logged';

const router = Router();

router.post('/createcollaborator', new CreateCollaboratorControl().handle)
router.post('/login', new LoginCollaboratorControl().handle)
router.post('/createsalesform', Logged, new CreateSalesformControl().handle)
router.post('/createclient', Manager, new CreateClientControl().handle)
router.post('/createbudget',Logged, new CreateBudgetControl().handle)
router.post('/createproduct', Logged, new CreateProductControl().handle)

router.get('/dashboard', Manager, new DashboardControle().handle)
router.get('/salesform/all', new ListAllSalesformControl().handle)
router.get('/getclient', new ListClientControl().handle)
router.get('/getclients/all', new ListAllClientsControl().handle)
router.get('/getbudget', new ListBudgetControl().handle)
router.get('/getsalesform/client', new ListSalesformByClientControl().handle)
router.get('/getproducts/all', new ListAllProductsControl().handle)
router.get('/getproduct/code', new ListProductByCodeControl().handle)
router.get('/getproduct/ref', new ListarProductByRefControl().handle)
router.get('/getproduct/unique/ref', new ListarProductUniqueRefControl().handle)

router.delete('/delsalesform', Manager, new DelSalesformControl().handle)
router.delete('/delbudget', new DelBudgetControl().handle)

router.put('/putsalesform', Logged, new PutSalesformControl().handle)
router.put('/putstock', Logged, new UpdateStockControl().handle)
router.put('/budget', Logged, new UpdateBudgetControl().handle)
router.put('/product/add', Owner, new AddProductControl().handle)

export { router };