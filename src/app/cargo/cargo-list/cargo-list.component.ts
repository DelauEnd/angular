import { Component, Input, OnInit } from '@angular/core';
import { CargoDto } from 'src/app/shared/interfaces/responseInterfaces';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {
  @Input() cargoes: CargoDto[]

  constructor() { }

  ngOnInit(): void {
  }

}
