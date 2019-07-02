import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoflexibilidadComponent } from './juegoflexibilidad.component';

describe('JuegoflexibilidadComponent', () => {
  let component: JuegoflexibilidadComponent;
  let fixture: ComponentFixture<JuegoflexibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoflexibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoflexibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
