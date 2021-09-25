import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  columns: string[] = ["Payee", "Amount", "Date", "Category", "Memo"];

  constructor() { }

  ngOnInit(): void {
  }

}