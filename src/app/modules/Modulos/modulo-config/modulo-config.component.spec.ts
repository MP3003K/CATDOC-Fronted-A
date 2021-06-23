import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModuloConfigComponent } from './modulo-config.component';

describe('ModuloConfigComponent', () => {
  let component: ModuloConfigComponent;
  let fixture: ComponentFixture<ModuloConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
