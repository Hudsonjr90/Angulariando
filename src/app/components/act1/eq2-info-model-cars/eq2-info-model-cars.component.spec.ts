import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EQ2InfoModelCarsComponent } from './eq2-info-model-cars.component';

describe('EQ2InfoModelCarsComponent', () => {
  let component: EQ2InfoModelCarsComponent;
  let fixture: ComponentFixture<EQ2InfoModelCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EQ2InfoModelCarsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EQ2InfoModelCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Unit Test', () => {
    component;
  });
});
