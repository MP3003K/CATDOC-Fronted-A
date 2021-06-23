import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaCursoComponent } from './competencia-curso.component';

describe('CompetenciaCursoComponent', () => {
  let component: CompetenciaCursoComponent;
  let fixture: ComponentFixture<CompetenciaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
