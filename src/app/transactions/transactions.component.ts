import { Component, OnInit } from '@angular/core';
import { MockTransactionData } from '../mock-data/mockTransactionData';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  // Header names in columns 
  headerColumns =
    ["Date", "Payee", "Amount", "Category", "Memo"];

  transactionData: Transaction[] = MockTransactionData;

  constructor() { }

  ngOnInit(): void {
  }



}