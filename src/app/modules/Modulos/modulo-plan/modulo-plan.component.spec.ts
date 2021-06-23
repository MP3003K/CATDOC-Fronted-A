import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuloPlanComponent } from './modulo-plan.component';

describe('ModuloPlanComponent', () => {
  let component: ModuloPlanComponent;
  let fixture: ComponentFixture<ModuloPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
