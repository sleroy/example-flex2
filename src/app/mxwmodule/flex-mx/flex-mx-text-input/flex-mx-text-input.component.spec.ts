import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInput } from './flex-mx-text-input.component';

describe('TextInput', () => {
  let component: TextInput;
  let fixture: ComponentFixture<TextInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
