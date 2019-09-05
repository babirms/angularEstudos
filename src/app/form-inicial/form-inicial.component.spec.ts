import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInicialComponent } from './form-inicial.component';

describe('FormInicialComponent', () => {
  let component: FormInicialComponent;
  let fixture: ComponentFixture<FormInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
