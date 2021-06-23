import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuloInfComponent } from './modulo-inf.component';

describe('ModuloInfComponent', () => {
  let component: ModuloInfComponent;
  let fixture: ComponentFixture<ModuloInfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
