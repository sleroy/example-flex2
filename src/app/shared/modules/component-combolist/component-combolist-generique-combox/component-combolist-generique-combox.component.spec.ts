import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriqueCombox } from './component-combolist-generique-combox.component';

describe('GeneriqueCombox', () => {
  let component: GeneriqueCombox;
  let fixture: ComponentFixture<GeneriqueCombox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneriqueCombox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneriqueCombox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
