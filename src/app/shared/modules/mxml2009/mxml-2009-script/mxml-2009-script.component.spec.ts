import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Script } from './mxml-2009-script.component';

describe('Script', () => {
  let component: Script;
  let fixture: ComponentFixture<Script>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Script ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Script);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
