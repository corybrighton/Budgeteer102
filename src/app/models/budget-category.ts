interface BudgetCategoryInterface{
  name: string;
  amount?: number;
  spent?: number;
  lastMonthSpent?: number;
  lastMonthBudgetedAmount?: number;
  monthlyRecurring?: boolean;
}

export class BudgetCategory implements BudgetCategoryInterface{
  name: string;
  amount?: number;
  spent?: number;
  lastMonthSpent?: number;
  lastMonthBudgetedAmount?: number;
  monthlyRecurring?: boolean;

  constructor(name: string, amount = 0, spent = 0, lastMonthBudgetedAmount = 0, lastMonthSpent = 0, monthlyRecurring = false) {
    this.name = name;
    this.amount = amount;
    this.spent = spent;
    this.lastMonthBudgetedAmount = lastMonthBudgetedAmount;
    this.lastMonthSpent = lastMonthSpent;
    this.monthlyRecurring = monthlyRecurring;
  }

  showAll() {
    return Object.keys(this)
  }
}
