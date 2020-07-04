import { TestBed } from '@angular/core/testing';

import { CadastroUsuarioesService } from './cadastro-usuarioes.service';

describe('CadastroUsuarioesService', () => {
  let service: CadastroUsuarioesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUsuarioesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
