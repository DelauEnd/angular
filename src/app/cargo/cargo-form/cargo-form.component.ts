import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoCategoryDto } from 'src/app/shared/interfaces/responseInterfaces';
import { DateValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {
  @Input() cargo: any
  cargoForm: FormGroup;

  categories: CargoCategoryDto[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cargoForm = this.formBuilder.group({
      title: [null, [
        Validators.required
      ]],
      category: [null, [
        Validators.required
      ]],
      departureDate: [null,[
        Validators.required,
        DateValidators.mmddyyyyDate
      ]],
      weight: [null, [
        Validators.required
      ]],
      height: [null, [
        Validators.required
      ]],
      length: [null, [
        Validators.required,

      ]],
      width: [null, [
        Validators.required
      ]],
    });
  }

  isControlValid(controlName: string) : boolean{
    let control = this.cargoForm.controls[controlName]
    return control.invalid && control.touched;
  }

  clearForm()
  {
    this.cargoForm.reset();
  }
}
