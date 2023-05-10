interface BudgetCategoryInterface{
  name: string;
  amount?: number;
  icon?: string;
  spent?: number;
  lastMonthSpent?: number;
  lastMonthBudgetedAmount?: number;
}

export class BudgetCategory implements BudgetCategoryInterface{
  name: string;
  amount: number;
  icon: string;
  spent: number;
  lastMonthSpent: number;
  lastMonthBudgetedAmount: number;

  constructor(name: string, amount = 0, spent = 0, lastMonthBudgetedAmount = 0, lastMonthSpent = 0, icon = "savings",) {
    this.name = name;
    this.amount = amount;
    this.icon = icon;
    this.spent = spent;
    this.lastMonthBudgetedAmount = lastMonthBudgetedAmount;
    this.lastMonthSpent = lastMonthSpent;
  }

  showAll() {
    return Object.entries(this)
  }

  leftThisMonth() {
    return this.amount - this.spent;
  }

  persentLeft() {
    if (this.amount <= 0) return 0;
    return this.spent / this.amount;
  }
}
