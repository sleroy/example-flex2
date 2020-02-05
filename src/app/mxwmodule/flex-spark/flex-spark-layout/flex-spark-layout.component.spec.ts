import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { layout } from './flex-spark-layout.component';

describe('layout', () => {
  let component: layout;
  let fixture: ComponentFixture<layout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ layout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
