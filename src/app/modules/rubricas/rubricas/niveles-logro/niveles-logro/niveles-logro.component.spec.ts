import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesLogroComponent } from './niveles-logro.component';

describe('NivelesLogroComponent', () => {
  let component: NivelesLogroComponent;
  let fixture: ComponentFixture<NivelesLogroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelesLogroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelesLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
