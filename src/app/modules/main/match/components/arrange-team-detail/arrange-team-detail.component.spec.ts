import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeTeamDetailComponent } from './arrange-team-detail.component';

describe('ArrangeTeamDetailComponent', () => {
  let component: ArrangeTeamDetailComponent;
  let fixture: ComponentFixture<ArrangeTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
