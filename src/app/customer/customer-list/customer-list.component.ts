import { Component, ComponentRef, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn, Subscription } from 'rxjs';
import { CustomerForCreationDto } from 'src/app/shared/interfaces/requestInterfaces/createInterfaces';
import { CustomerForUpdateDto } from 'src/app/shared/interfaces/requestInterfaces/updateInterfaces';
import { CustomerDto, OrderDto } from 'src/app/shared/interfaces/responseInterfaces';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

export interface TestTest {
  num: number;
  txt: string
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  customers: CustomerDto[] = [];

  selectedCustomerIdx :number;
  customerToCreate: CustomerForCreationDto;
  customerToUpdate: CustomerForUpdateDto;

  showUndeleted = false;

  readSub: Subscription;
  deleteSub: Subscription;

  constructor(private customer: CustomerService, public router: Router) { }

  ngOnInit(): void {
    this.readCustomers();
  }

  log(msg: string) {
    console.log(msg);
  }

  deleteSelectedCustomer() {
    this.deleteSub = this.customer.delete(this.customers[this.selectedCustomerIdx].id).subscribe(
      deleted => {
        this.customers = this.customers.filter(customer => customer != this.customers[this.selectedCustomerIdx]);
        this.showUndeleted = false;
      },
      error => {
        console.log("undeleted", error)
        this.showUndeleted = true;
    }
    )

    
  }

  openCreateModal() {
    this.viewRef.clear();
    let component = this.viewRef.createComponent(CreateCustomerComponent);
    component.instance.onCreate.subscribe( _ => this.readCustomers())
  }

  readCustomers(){
    this.readSub = this.customer.getAll().subscribe(
      (customers: CustomerDto[]) => {
        this.customers = customers;
      },
      (error) => console.log("read error", error)
    );
  }
}
