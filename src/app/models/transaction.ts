export class Transaction {
  private _payee: string;
  private _amount: number;
  private _date: Date;
  private _category: string;
  private _memo: string;

  constructor(payee: string, amount: number, date: Date, category: string, memo: string) {
    this._payee = payee;
    this._amount = amount;
    this._date = date;
    this._category = category;
    this._memo = memo;
  }

  public get payee(): string {
    return this._payee
  }

  public get amount(): number {
    return this._amount;
  }


  public set amount(v: number) {
    this._amount = v;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(v: Date) {
    this._date = v;
  }

  public get category(): string {
    return this._category;
  }

  public set category(v: string) {
    this._category = v;
  }

  public get memo(): string {
    return this._memo;
  }

  public set memo(v: string) {
    this._memo = v;
  }

}
