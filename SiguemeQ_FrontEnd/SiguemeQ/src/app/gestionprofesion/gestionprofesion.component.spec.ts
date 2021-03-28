import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesionComponent } from './gestionprofesion.component';

describe('GestionProfesionComponent', () => {
  let component: GestionProfesionComponent;
  let fixture: ComponentFixture<GestionProfesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProfesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
