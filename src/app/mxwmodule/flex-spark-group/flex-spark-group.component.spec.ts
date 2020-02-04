import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group } from './flex-spark-group.component';

describe('Group', () => {
  let component: Group;
  let fixture: ComponentFixture<Group>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
