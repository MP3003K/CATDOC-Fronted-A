import { TestBed } from '@angular/core/testing';

import { CompetenciaNivelService } from './competencia-nivel.service';

describe('CompetenciaNivelService', () => {
  let service: CompetenciaNivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenciaNivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
