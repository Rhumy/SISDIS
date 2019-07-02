import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegomemoriaComponent } from './juegomemoria.component';

describe('JuegomemoriaComponent', () => {
  let component: JuegomemoriaComponent;
  let fixture: ComponentFixture<JuegomemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegomemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegomemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
