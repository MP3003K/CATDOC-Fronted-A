import { TestBed } from '@angular/core/testing';

import { LineaAcademicaService } from './linea-academica.service';

describe('LineaAcademicaService', () => {
  let service: LineaAcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaAcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
