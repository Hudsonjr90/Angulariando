import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EQ1InfoClientePerfilComponent } from './eq1-info-client-profile.component';

describe('EQ1InfoClientePerfilComponent', () => {
  let component: EQ1InfoClientePerfilComponent;
  let fixture: ComponentFixture<EQ1InfoClientePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EQ1InfoClientePerfilComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EQ1InfoClientePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
