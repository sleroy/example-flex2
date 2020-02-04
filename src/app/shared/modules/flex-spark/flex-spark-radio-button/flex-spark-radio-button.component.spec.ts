import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButton } from './flex-spark-radio-button.component';

describe('RadioButton', () => {
  let component: RadioButton;
  let fixture: ComponentFixture<RadioButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
