import { Component, OnInit } from '@angular/core';
import { MockTransactionData } from '../mock-data/mockTransactionData';
import { Transaction } from '../models/transaction';
import { environment } from 'src/environments/environment';

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
  csvTransactions: string[] = [];
  testing = environment.testing;

  constructor() { }

  ngOnInit(): void {
  }

  public getCSV(event: Event) {
    let files = (event.target as HTMLInputElement).files
    if (files == null || files.length <= 0) return;
    let file: File | null = files.item(0); 
    if (file == null || !this.isCSV(file)) return;
    this.csvToString(file);
  }
  
  csvToString(file: File) {
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let csv: string = reader.result as string;
      this.csvTransactions = csv.split("\n");
    }
  }
  
  isCSV(file:File): boolean {
    var regex = new RegExp("(.*?)\.(csv)$");
    return regex.test(file.name.toLowerCase());
  }
  
  public testButton() {
    console.log("button pushed")
    console.log(this.csvTransactions[0])
    console.log(this.csvTransactions[1])
  }


}