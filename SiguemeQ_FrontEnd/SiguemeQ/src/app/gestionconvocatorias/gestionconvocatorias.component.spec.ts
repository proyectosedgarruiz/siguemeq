import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConvocatoriasComponent } from './gestionconvocatorias.component';

describe('GestionConvocatoriasComponent', () => {
  let component: GestionConvocatoriasComponent;
  let fixture: ComponentFixture<GestionConvocatoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConvocatoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
