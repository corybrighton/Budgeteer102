import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-worth-and-debts',
  templateUrl: './worth-and-debts.component.html',
  styleUrls: ['./worth-and-debts.component.scss']
})
export class WorthAndDebtsComponent implements OnInit {

  constructor() { }
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public getRandomDate():number {
    let start = new Date(2020, 1, 1);
    let end = new Date()
    let x = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    let xString = `${x.getMonth()}.${x.getDay()}`;
    return +xString;
  }

  public debtData: number[] = []

  public worthData: number[] = []
  
  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scale: {
      y: {
        min: 0,
      },
      x: {
        type: 'time',
        time: {
          unit:'month'
        }
      }
    },
  };

  public monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  public labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';

  getWorth() {
    for (let index = 0; index < 12; index++) {
      this.worthData.push(Math.floor(Math.random() * 50))
    }
    this.updateLables(this.worthData.length);
    // return this.worthData;
    return this.worthData.sort((a, b) => a > b ? 1 : -1); 
  }

  getDebt() {
    for (let index = 0; index < 12; index++) {
      this.debtData.push(Math.floor(Math.random() * 50))
    }
    this.updateLables(this.debtData.length);
    // return this.debtData;
    return this.debtData.sort((a, b) => (a < b) ? 1 : -1);
  }

  updateLables(l: number) {
    if (this.labels.length < this.debtData.length) this.addLables(this.debtData.length);
    if (this.labels.length < this.worthData.length) this.addLables(this.worthData.length);
    this.chart?.update();
  }
  
  addLables(l: number) {
    let monthIndex = 11;
    for (let index = 0; index < l-12; index++) {
      this.labels.unshift(this.monthLabels[monthIndex]);
      monthIndex--;
      if (monthIndex < 0) monthIndex = 11;
    }
  }

  public chartData = [
    {
      data: this.getWorth(),
      label: 'Worth',
      backgroundColor: "#2f4d2d55",
      borderColor: "#2f4d2d",
      showLine: true,
      fill: true
    },
    {
      data: this.getDebt(),
      label: 'Debts',
      backgroundColor:"#aa000055",
      borderColor: "red",
      showLine: true,
      fill: true
    },
  ];


  
  ngOnInit(): void {
  }



}
