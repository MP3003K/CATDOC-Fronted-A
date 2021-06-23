import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemestreComponent } from './semestre.component';

describe('SemestreComponent', () => {
  let component: SemestreComponent;
  let fixture: ComponentFixture<SemestreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
