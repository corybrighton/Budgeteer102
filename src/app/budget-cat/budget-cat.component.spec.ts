import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCatComponent } from './budget-cat.component';

describe('BudgetCatComponent', () => {
  let component: BudgetCatComponent;
  let fixture: ComponentFixture<BudgetCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
