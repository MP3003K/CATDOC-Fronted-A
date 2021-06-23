import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanLineaComponent } from './plan-linea.component';

describe('PlanLineaComponent', () => {
  let component: PlanLineaComponent;
  let fixture: ComponentFixture<PlanLineaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
