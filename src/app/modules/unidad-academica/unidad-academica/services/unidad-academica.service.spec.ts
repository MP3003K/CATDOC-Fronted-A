import { TestBed } from '@angular/core/testing';

import { UnidadAcademicaService } from './unidad-academica.service';

describe('UnidadAcademicaService', () => {
  let service: UnidadAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
