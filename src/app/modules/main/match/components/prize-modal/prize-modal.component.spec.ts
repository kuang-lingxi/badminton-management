import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeModalComponent } from './prize-modal.component';

describe('PrizeModalComponent', () => {
  let component: PrizeModalComponent;
  let fixture: ComponentFixture<PrizeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
