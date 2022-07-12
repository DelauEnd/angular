import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerForCreationDto } from 'src/app/shared/interfaces/requestInterfaces/createInterfaces';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { PhoneNumberValidators } from 'src/app/shared/validators';
import { TestTest } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerCreateForm: FormGroup;
  
  createSub: Subscription = new Subscription();

  @Output() onCreate = new EventEmitter()

  constructor( private formBuilder: FormBuilder, private customer: CustomerService) { }

  ngOnInit(): void {
    this.customerCreateForm = this.formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      patronymic: ['', Validators.required],
      phone: ['', [Validators.required, PhoneNumberValidators.digit10Number]],
      address: ['', Validators.required],
    });
  }

  isControlValid(controlName: string)
  {
    let control = this.customerCreateForm.controls[controlName]
    return control.invalid && control.touched;
  }

  isFormValid(){
    return this.customerCreateForm.valid;
  }

  createCustomer() {
    let controls = this.customerCreateForm.controls;

    let customerToCreate: CustomerForCreationDto = {
      address: controls['address'].value,
      contactPerson: {
        name: controls['name'].value,
        surname: controls['surname'].value,
        patronymic: controls['patronymic'].value,
        phoneNumber: controls['phone'].value,
      }
    }

    this.createSub = this.customer.create(customerToCreate).subscribe(    
      (customer) => {
        console.log("read ok", customer)
        this.onCreate.emit();
      },
      (error) => console.error("read error", error)
    );
  }
}
