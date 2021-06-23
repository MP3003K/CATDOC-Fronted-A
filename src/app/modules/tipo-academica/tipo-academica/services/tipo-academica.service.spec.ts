import { TestBed } from '@angular/core/testing';

import { TipoAcademicaService } from './tipo-academica.service';

describe('TipoAcademicaService', () => {
  let service: TipoAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
