import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaendeticaComponent } from './memoriaendetica.component';

describe('MemoriaendeticaComponent', () => {
  let component: MemoriaendeticaComponent;
  let fixture: ComponentFixture<MemoriaendeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaendeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaendeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
