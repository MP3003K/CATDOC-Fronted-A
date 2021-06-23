import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuloEjeComponent } from './modulo-eje.component';

describe('ModuloEjeComponent', () => {
  let component: ModuloEjeComponent;
  let fixture: ComponentFixture<ModuloEjeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloEjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
