import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedPrizeComponent } from './need-prize.component';

describe('NeedPrizeComponent', () => {
  let component: NeedPrizeComponent;
  let fixture: ComponentFixture<NeedPrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedPrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
