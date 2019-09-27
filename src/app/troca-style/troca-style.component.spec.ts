import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaStyleComponent } from './troca-style.component';

describe('TrocaStyleComponent', () => {
  let component: TrocaStyleComponent;
  let fixture: ComponentFixture<TrocaStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocaStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
