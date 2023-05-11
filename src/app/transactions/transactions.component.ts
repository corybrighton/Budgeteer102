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

  public changeListener(event: Event) {
    let files = (event.target as HTMLInputElement).files
    
    if (files == null) return;
    if (files.length <= 0) return;
    console.log(files);

    
    
    let file: File | null = files.item(0); 
    
    if (file == null) return;
    var regex = new RegExp("(.*?)\.(csv)$");
    if (!regex.test(file.name.toLowerCase())) {
      file = null;
      console.log( "not a file")
      return;
    }
    console.log(file.name);
    console.log(file.size);
    console.log(file.type);
      
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
        let csv: string = reader.result as string;
        console.log(csv);
       }
    
}


}