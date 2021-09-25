import { Component, OnInit } from '@angular/core';
import { MockBudgetCategories } from '../mock-data/mockBudgets';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

  budgetCategory = MockBudgetCategories;
  constructor() { }

  ngOnInit(): void {
  }

}
