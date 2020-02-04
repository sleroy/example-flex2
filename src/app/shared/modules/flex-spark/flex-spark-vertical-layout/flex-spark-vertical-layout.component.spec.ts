import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLayout } from './flex-spark-vertical-layout.component';

describe('VerticalLayout', () => {
  let component: VerticalLayout;
  let fixture: ComponentFixture<VerticalLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
