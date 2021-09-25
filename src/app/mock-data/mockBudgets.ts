import { BudgetCategory } from "../models/budget-category";

export const MockBudgetCategories: BudgetCategory[] = [
  {
    name: "Savings",
    amount: 1000,
    lastMonthBudgetedAmount: 1000,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Food",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Mortgage",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Utilities",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Transportation",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Insurance",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: true
  },
  {
    name: "Medical",
    amount: 500,
    lastMonthBudgetedAmount: 800,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Dogs",
    amount: 1000,
    lastMonthBudgetedAmount: 1000,
    spent: 200,
    monthlyRecurring: false
  },
  {
    name: "Hot Tub",
    amount: 500,
    lastMonthBudgetedAmount: 500,
    spent: 500,
    monthlyRecurring: true
  }
]