import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlHandlingStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { OperationType } from 'src/app/shared/enums';
import { CargoForCreationDto } from 'src/app/shared/interfaces/requestInterfaces/createInterfaces';
import { CustomerDto, OrderDto } from 'src/app/shared/interfaces/responseInterfaces';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { DateValidators } from 'src/app/shared/validators';

interface OrderForm{
  senderId: number;
  destinationId: number;
  cargoes: CargoForCreationDto[];
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent implements OnInit { 
  orderForm: FormGroup;
  @Input() operationType: OperationType;
  @Input() inOrder: OrderDto;
  @Output() outOrderEmmiter = new EventEmitter<OrderForm>()

  cargoes: CargoForCreationDto[] = [];

  customers: CustomerDto[];
  readSub: Subscription = new Subscription;

  constructor(private customer: CustomerService, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.initForm();
    this.loadCustomers();   
  }

  initForm() {
    this.orderForm = this.formBuilder.group({
      sender: [null, [
        Validators.required
      ]],
      destination: [null, [
        Validators.required
      ]]
    });
  }

  private loadCustomers(){
    this.readSub = this.customer.getAllCustomers().subscribe(
      (customers: CustomerDto[]) => {
        this.customers = customers;
      },
      (error) => console.log("read error", error)
    );

  }

  isControlValid(controlName: string) : boolean{
    let control = this.orderForm.controls[controlName]
    return control.invalid && control.touched;
  }
}
