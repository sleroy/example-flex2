import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application } from './flex-spark-application.component';

describe('Application', () => {
  let component: Application;
  let fixture: ComponentFixture<Application>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Application ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
