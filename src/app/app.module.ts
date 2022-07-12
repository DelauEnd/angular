import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderService } from './shared/services/order.service';
import { HomeComponent } from './home/home/home.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { LoginFormComponent } from './auth/login-form/login-form.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerListComponent,
    ModalComponent,
    CreateCustomerComponent,
    LoginFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
