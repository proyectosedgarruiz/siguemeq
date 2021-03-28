import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPrecioConsultaComponent } from './gestionprecioconsulta.component';

describe('GestionPrecioConsultaComponent', () => {
  let component: GestionPrecioConsultaComponent;
  let fixture: ComponentFixture<GestionPrecioConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPrecioConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPrecioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
