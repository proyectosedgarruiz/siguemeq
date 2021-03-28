import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHorasFormacionComponent } from './gestionhorasformacion.component';

describe('GestionHorasFormacionComponent', () => {
  let component: GestionHorasFormacionComponent;
  let fixture: ComponentFixture<GestionHorasFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionHorasFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionHorasFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
