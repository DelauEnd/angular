import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDto, OrderDto } from '../interfaces/responseInterfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  basePath = '/';
  controllerPath = "/api/customers"

  constructor(private http: HttpClient) {
    this.basePath = environment.serverUrl;
  }

  getAllCustomers() : Observable<CustomerDto[]>{
    return this.http.get<CustomerDto[]>(`${this.basePath}${this.controllerPath}`)
  }
}
