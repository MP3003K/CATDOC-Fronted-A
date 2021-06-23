import { TestBed } from '@angular/core/testing';

import { RubricasService } from './rubricas.service';

describe('RubricasService', () => {
  let service: RubricasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubricasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
