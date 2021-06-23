import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuloSegComponent } from './modulo-seg.component';

describe('ModuloSegComponent', () => {
  let component: ModuloSegComponent;
  let fixture: ComponentFixture<ModuloSegComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
