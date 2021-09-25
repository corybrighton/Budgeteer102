export class BudgetCategory {
  name: string;
  amount: number;
  spent: number;
  lastMonthBudgetedAmount: number;
  monthlyRecurring: boolean;

  constructor(name: string, amount: number, spent: number, lastMonthBudgetedAmount: number, monthlyRecurring: boolean) {
    this.name = name;
    this.amount = amount;
    this.spent = spent;
    this.lastMonthBudgetedAmount = lastMonthBudgetedAmount;
    this.monthlyRecurring = monthlyRecurring;
  }
}
