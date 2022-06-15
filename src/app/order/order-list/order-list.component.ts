import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDto } from 'src/app/shared/interfaces/responseInterfaces';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: OrderDto[] = [];
  readSub: Subscription = new Subscription;

  constructor(private order: OrderService) { }

  ngOnInit(): void {
    this.readSub = this.order.getAllOrders().subscribe(
      (orders: OrderDto[]) => {
        this.orders = orders;
      },
      (error) => console.log("read error", error)
    );
  }
}
