import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosEnviadosPage } from './servicos-enviados.page';

describe('ServicosEnviadosPage', () => {
  let component: ServicosEnviadosPage;
  let fixture: ComponentFixture<ServicosEnviadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosEnviadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosEnviadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
