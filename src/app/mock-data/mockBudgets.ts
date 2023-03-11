import { BudgetCategory } from "../models/budget-category";

export const MockBudgetCategories: BudgetCategory[] = [
  new BudgetCategory("Savings", 1000, 1000, 1000),
  new BudgetCategory("Food", 500, 800, 200, 1000),
  new BudgetCategory("Mortgage", 2000, 2000, 2000),
  new BudgetCategory("Utilities", 250, 150, 100),
  new BudgetCategory("Dog"),

]