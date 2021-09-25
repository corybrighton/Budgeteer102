import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BudgetCategory } from '../models/budget-category';

@Component({
  selector: 'app-budget-cat',
  templateUrl: './budget-cat.component.html',
  styleUrls: ['./budget-cat.component.scss']
})
export class BudgetCatComponent implements OnInit {

  @Input() budgetCategory?: BudgetCategory;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.firstChange) {
      this.budgetCategory = <BudgetCategory><unknown>changes.currentValue
    }
  }
}
