import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonOuiNon } from './component-radiobutton-radio-button-oui-non.component';

describe('RadioButtonOuiNon', () => {
  let component: RadioButtonOuiNon;
  let fixture: ComponentFixture<RadioButtonOuiNon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonOuiNon ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonOuiNon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
