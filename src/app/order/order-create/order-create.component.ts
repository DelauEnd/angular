import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OperationType } from 'src/app/shared/enums';
import { CustomerService } from 'src/app/shared/services/customer.service';


@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  readonly operationType = OperationType.Create;

  constructor() { }

  ngOnInit(): void {

  }
}

