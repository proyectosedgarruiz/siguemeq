import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionpqrsComponent } from './recepcionpqrs.component';

describe('RecepcionpqrsComponent', () => {
  let component: RecepcionpqrsComponent;
  let fixture: ComponentFixture<RecepcionpqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionpqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionpqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
