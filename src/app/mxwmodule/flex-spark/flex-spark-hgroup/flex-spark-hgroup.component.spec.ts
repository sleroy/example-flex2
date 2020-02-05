import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HGroup } from './flex-spark-hgroup.component';

describe('HGroup', () => {
  let component: HGroup;
  let fixture: ComponentFixture<HGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
