import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardLeaderComponent } from './dash-board-leader.component';

describe('DashBoardLeaderComponent', () => {
  let component: DashBoardLeaderComponent;
  let fixture: ComponentFixture<DashBoardLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
