import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRubricasComponent } from './add-rubricas.component';

describe('AddRubricasComponent', () => {
  let component: AddRubricasComponent;
  let fixture: ComponentFixture<AddRubricasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRubricasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRubricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
