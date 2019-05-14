import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostasPage } from './propostas.page';

describe('PropostasPage', () => {
  let component: PropostasPage;
  let fixture: ComponentFixture<PropostasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
