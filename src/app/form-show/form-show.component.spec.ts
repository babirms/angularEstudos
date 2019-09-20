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

  it('deve testar se o componente é criado com sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('deve testar se o método onClick() é chamado', () => {
    spyOn(component, 'onClean').and.callThrough();
    component.onClick();
    expect(component.onClean).toHaveBeenCalled();
  });

  it('deve testar se o método onClean() reseta o formulário', () => {
    /***/
  });

});
