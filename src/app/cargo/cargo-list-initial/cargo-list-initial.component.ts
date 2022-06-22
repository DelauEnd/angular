import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OperationType } from 'src/app/shared/enums';
import { CargoForCreationDto } from 'src/app/shared/interfaces/requestInterfaces/createInterfaces';
import { CargoDto } from 'src/app/shared/interfaces/responseInterfaces';

interface InitialCargoForCreation extends CargoForCreationDto{
  category: string;
}

@Component({
  selector: 'app-cargo-list-initial',
  templateUrl: './cargo-list-initial.component.html',
  styleUrls: ['./cargo-list-initial.component.css']
})
export class CargoListInitialComponent implements OnInit {
  @Output() outCargoesEmitter: EventEmitter<CargoForCreationDto[]>
  
  operationType: OperationType;
  printCargoes: InitialCargoForCreation[] = [];

  editedCargoIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  setOperationType(type: string)
  {
    try{
      this.operationType = type as OperationType;
    }
    catch{
      console.log(type + " – incorrect operationType")
    }
  }

}
