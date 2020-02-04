import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { test } from './test.component';

describe('test', () => {
  let component: test;
  let fixture: ComponentFixture<test>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ test ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(test);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
