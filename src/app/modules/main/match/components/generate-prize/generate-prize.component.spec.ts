import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePrizeComponent } from './generate-prize.component';

describe('GeneratePrizeComponent', () => {
  let component: GeneratePrizeComponent;
  let fixture: ComponentFixture<GeneratePrizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePrizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
