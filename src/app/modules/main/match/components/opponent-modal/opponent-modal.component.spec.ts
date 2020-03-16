import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentModalComponent } from './opponent-modal.component';

describe('OpponentModalComponent', () => {
  let component: OpponentModalComponent;
  let fixture: ComponentFixture<OpponentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpponentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
