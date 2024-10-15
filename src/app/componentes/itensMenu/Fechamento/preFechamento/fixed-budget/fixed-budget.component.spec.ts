import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBudgetComponent } from './fixed-budget.component';

describe('FixedBudgetComponent', () => {
  let component: FixedBudgetComponent;
  let fixture: ComponentFixture<FixedBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedBudgetComponent]
    });
    fixture = TestBed.createComponent(FixedBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
