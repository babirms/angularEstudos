import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStepComponent } from './content-step.component';

describe('ContentStepComponent', () => {
  let component: ContentStepComponent;
  let fixture: ComponentFixture<ContentStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
