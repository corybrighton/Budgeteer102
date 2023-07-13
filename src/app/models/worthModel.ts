import { WelthPoint } from "./welthPoint";

interface WorthModelInterface{
  assets: WelthPoint[],
  debts: WelthPoint[]
}

export class WorthModel implements WorthModelInterface{
  public assets: WelthPoint[];
  public debts: WelthPoint[];

  constructor(assets:WelthPoint[],debts:WelthPoint[]) {
    this.assets = assets;
    this.debts = debts;
  }
}