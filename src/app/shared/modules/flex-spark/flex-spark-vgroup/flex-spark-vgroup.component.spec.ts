import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VGroup } from './flex-spark-vgroup.component';

describe('VGroup', () => {
  let component: VGroup;
  let fixture: ComponentFixture<VGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
