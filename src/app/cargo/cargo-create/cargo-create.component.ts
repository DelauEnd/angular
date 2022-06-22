import { Component, Input, OnInit } from '@angular/core';
import { CargoForCreationDto } from 'src/app/shared/interfaces/requestInterfaces/createInterfaces';

export interface cargoCreateForm{

}

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {
  @Input() cargoToEdit: CargoForCreationDto

  constructor() { }

  ngOnInit(): void {
    if (this.cargoToEdit != null)
      this.initCargoFields();
  }

  initCargoFields()
  {
    
  }
}

