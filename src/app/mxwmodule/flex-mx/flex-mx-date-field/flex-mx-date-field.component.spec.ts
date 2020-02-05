import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateField } from './flex-mx-date-field.component';

describe('DateField', () => {
  let component: DateField;
  let fixture: ComponentFixture<DateField>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateField ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
