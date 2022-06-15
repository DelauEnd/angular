import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { OrderDto } from '../interfaces/responseInterfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  basePath = '/';
  controllerPath = "/api/orders"

  constructor(private http: HttpClient) {
    this.basePath = environment.serverUrl;
  }

  getAllOrders() : Observable<OrderDto[]>{
    return this.http.get<OrderDto[]>(`${this.basePath}${this.controllerPath}`)
  }
}
