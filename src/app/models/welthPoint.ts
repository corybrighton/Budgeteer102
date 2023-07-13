interface WelthPointInferface{
  date: Date,
  amount?: number
}

export class WelthPoint implements WelthPointInferface{
  public date: Date;
  public amount: number;

  constructor(date: Date, amount: number = 0) {
    this.date = date;
    this.amount = amount;
  }
}