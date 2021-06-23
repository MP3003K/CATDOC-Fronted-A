import { TestBed } from '@angular/core/testing';

import { CompetenciaCursoService } from './competencia-curso.service';

describe('CompetenciaCursoService', () => {
  let service: CompetenciaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenciaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
