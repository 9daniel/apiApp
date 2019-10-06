import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoaPage } from './lista-pessoa.page';

describe('ListaPessoaPage', () => {
  let component: ListaPessoaPage;
  let fixture: ComponentFixture<ListaPessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
