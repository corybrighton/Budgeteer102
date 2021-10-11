import { Transaction } from "../models/transaction";

function t() {
  let transactions = []
  const payees = ["Costco", "Home Depot", "Winco", "Albertsons"];
  const cat = ["Food", "Home", "Clothing"]
  for (let index = 0; index < 25; index++) {
    transactions.push(
      new Transaction(
        payees[(index % payees.length)],
        index * 5,
        new Date(10, index, 2021),
        cat[index % cat.length],
        "memo"))
  }
  return transactions;
}

export const MockTransactionData: Transaction[] = t();