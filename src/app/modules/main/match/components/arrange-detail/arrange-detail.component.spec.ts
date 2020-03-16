import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeDetailComponent } from './arrange-detail.component';

describe('ArrangeDetailComponent', () => {
  let component: ArrangeDetailComponent;
  let fixture: ComponentFixture<ArrangeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
