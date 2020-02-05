import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Declarations } from './mxml-2009-declarations.component';

describe('Declarations', () => {
  let component: Declarations;
  let fixture: ComponentFixture<Declarations>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Declarations ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Declarations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
