import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderService } from './shared/services/order.service';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { HomeComponent } from './home/home/home.component';
import { OrderInfoComponent } from './order/order-info/order-info.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { CargoFormComponent } from './cargo/cargo-form/cargo-form.component';
import { CargoCreateComponent } from './cargo/cargo-create/cargo-create.component';
import { CargoUpdateComponent } from './cargo/cargo-update/cargo-update.component';
import { CargoListComponent } from './cargo/cargo-list/cargo-list.component';
import { CargoListInitialComponent } from './cargo/cargo-list-initial/cargo-list-initial.component';
import { CargoModalComponent } from './cargo/cargo-modal/cargo-modal.component';

const routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'orders/create', component: OrderCreateComponent},
    { path: 'orders/:orderId', component: OrderInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderCreateComponent,
    HomeComponent,
    OrderInfoComponent,
    OrderFormComponent,
    CargoFormComponent,
    CargoCreateComponent,
    CargoUpdateComponent,
    CargoListComponent,
    CargoListInitialComponent,
    CargoModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
