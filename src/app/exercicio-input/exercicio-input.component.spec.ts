import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioInputComponent } from './exercicio-input.component';

describe('ExercicioInputComponent', () => {
  let component: ExercicioInputComponent;
  let fixture: ComponentFixture<ExercicioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
