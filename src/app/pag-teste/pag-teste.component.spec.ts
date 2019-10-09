import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTesteComponent } from './pag-teste.component';

describe('PagTesteComponent', () => {
  let component: PagTesteComponent;
  let fixture: ComponentFixture<PagTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
