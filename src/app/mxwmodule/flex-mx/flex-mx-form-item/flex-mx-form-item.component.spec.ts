import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItem } from './flex-mx-form-item.component';

describe('FormItem', () => {
  let component: FormItem;
  let fixture: ComponentFixture<FormItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
