import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoListInitialComponent } from './cargo-list-initial.component';

describe('CargoListInitialComponent', () => {
  let component: CargoListInitialComponent;
  let fixture: ComponentFixture<CargoListInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoListInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoListInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
