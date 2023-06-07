interface WorthModelInterface{
  date: Date,
  amount?: number
}

export class WorthModel implements WorthModelInterface{

  date: Date;
  amount: number;

  constructor(date:Date, amount = 0) {
    this.date = date;
    this.amount = amount;
  }
}