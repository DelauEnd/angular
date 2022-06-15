import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { HomeComponent } from './home/home/home.component';
import { OrderInfoComponent } from './order/order-info/order-info.component';

export class routerAssignment{
    static readonly routes = [
        { path: '', component: HomeComponent },
        { path: 'orders', component: OrderListComponent },
        { path: 'orders/:orderId', component: OrderInfoComponent},
        { path: 'orders/create', component: OrderCreateComponent}
    ]
}