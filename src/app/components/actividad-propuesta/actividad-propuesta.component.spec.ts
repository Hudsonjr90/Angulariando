import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadPropuestaComponent } from './actividad-propuesta.component';

describe('ActividadPropuestaComponent', () => {
  let component: ActividadPropuestaComponent;
  let fixture: ComponentFixture<ActividadPropuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadPropuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
