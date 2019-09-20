import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowComponent } from './form-show.component';
import { FormInicialComponent } from '../form-inicial/form-inicial.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormShowComponent', () => {
  let component: FormShowComponent;
  let fixture: ComponentFixture<FormShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShowComponent, FormInicialComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
