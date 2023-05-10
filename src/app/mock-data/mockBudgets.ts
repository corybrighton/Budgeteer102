import { BudgetCategory } from "../models/budget-category";

export const MockBudgetCategories: BudgetCategory[] = [
  new BudgetCategory("Giving", 1000, 1000, 1000, 1100, "volunteer_activism"),
  new BudgetCategory("Savings", 1000, 1000, 1000),
  new BudgetCategory("Food", 500, 800, 200, 1000, "restaurant_menu"),
  new BudgetCategory("Housing", 2000, 2000, 2000, 0, "cottage"),
  new BudgetCategory("Utilities", 250, 150, 100),
  new BudgetCategory("Transportation"),
  new BudgetCategory("Personal"),
  new BudgetCategory("Lifestyle"),
  new BudgetCategory("Health"),
  new BudgetCategory("Insurance"),
  new BudgetCategory("Debt"),


]