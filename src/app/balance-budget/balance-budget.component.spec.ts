import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceBudgetComponent } from './balance-budget.component';

describe('BalanceBudgetComponent', () => {
  let component: BalanceBudgetComponent;
  let fixture: ComponentFixture<BalanceBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
