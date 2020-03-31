import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamArrangeComponent } from './team-arrange.component';

describe('TeamArrangeComponent', () => {
  let component: TeamArrangeComponent;
  let fixture: ComponentFixture<TeamArrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamArrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamArrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
