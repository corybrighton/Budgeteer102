import { WorthModel } from '../models/worthModel';

function MakeData() {
  return {
    worth: MakeMockWorthDebtData(),
    debt: MakeMockWorthDebtData()
  }
}

function MakeMockWorthDebtData(): WorthModel[]{
  let wdd: WorthModel[] = [
    { date: new Date(2023, 5, 1), amount: 50 },
    { date: new Date(2023, 0, 1), amount: 150 },
  ];

  let times: number = Math.floor(Math.random() * 6) + 6;
  let dateArray: Date[] = [];
  for (let index = 0; index < times; index++) {
    let d = randomDate();
    
    if (dateArray.find(item => { return item.getMonth() == d.getMonth() })) {
      index--;
      continue;
    }
    dateArray.push(d);
    wdd.push({ date: d, amount: randomAmount() });
  }

  return wdd.sort((a, b) =>  a.date.getTime() - b.date.getTime());
}

function randomAmount() {
  return Math.floor(Math.random() * 150) + 20;
}

  function randomDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

export const MockWorthDebtData = MakeData();
