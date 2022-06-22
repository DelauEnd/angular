import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDto } from 'src/app/shared/interfaces/responseInterfaces';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: OrderDto[] = [];
  readSub: Subscription = new Subscription;

  constructor(private order: OrderService, public router: Router) { }

  ngOnInit(): void {
    this.readSub = this.order.getAllOrders().subscribe(
      (orders: OrderDto[]) => {
        this.orders = orders;
      },
      (error) => console.log("read error", error)
    );
  }
}
