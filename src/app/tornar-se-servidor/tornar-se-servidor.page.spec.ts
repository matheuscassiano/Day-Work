import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TornarSeServidorPage } from './tornar-se-servidor.page';

describe('TornarSeServidorPage', () => {
  let component: TornarSeServidorPage;
  let fixture: ComponentFixture<TornarSeServidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornarSeServidorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TornarSeServidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
