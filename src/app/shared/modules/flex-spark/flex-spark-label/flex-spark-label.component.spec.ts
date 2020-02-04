import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label } from './flex-spark-label.component';

describe('Label', () => {
  let component: Label;
  let fixture: ComponentFixture<Label>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
