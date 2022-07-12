import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerForCreationDto } from '../interfaces/requestInterfaces/createInterfaces';
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

  getAll() : Observable<CustomerDto[]>{
    return this.http.get<CustomerDto[]>(`${this.basePath}${this.controllerPath}`)
  }
  
  create(obj: CustomerForCreationDto): Observable<void>{
    return this.http.post<void>(this.basePath + this.controllerPath, obj)
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.basePath + this.controllerPath + "/" + id)
  }
}
