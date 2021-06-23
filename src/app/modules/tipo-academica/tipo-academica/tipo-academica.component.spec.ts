import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAcademicaComponent } from './tipo-academica.component';

describe('TipoAcademicaComponent', () => {
  let component: TipoAcademicaComponent;
  let fixture: ComponentFixture<TipoAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
