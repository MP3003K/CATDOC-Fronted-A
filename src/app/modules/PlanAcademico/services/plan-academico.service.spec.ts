import { TestBed } from '@angular/core/testing';

import { PlanAcademicoService } from './plan-academico.service';

describe('PlanAcademicoService', () => {
  let service: PlanAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
