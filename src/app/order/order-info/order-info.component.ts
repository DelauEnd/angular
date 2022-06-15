import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  orderId = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param =>{
       this.orderId = param['orderId']
    });
   }

  ngOnInit(): void {
  }

}
