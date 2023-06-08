import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { WorthModel } from '../models/worthModel';
import { MockWorthDebtData } from '../mock-data/mockWorthDebtData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-worth-and-debts',
  templateUrl: './worth-and-debts.component.html',
  styleUrls: ['./worth-and-debts.component.scss']
})
export class WorthAndDebtsComponent implements OnInit {

  testing: boolean = environment.testing;
  // testing: boolean = false;
  constructor() {
    this.normalizeDataToChart();
   }
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public debtData: WorthModel[] = [];
  public debtChartData: number[] = [];

  public assetsData: WorthModel[] = [];
  public assetsChartData: number[] = [];

  public worthChatData: number[] = [];
  
  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scale: {
      x: {
        type: 'time',
        time: {
          unit:'month'
        }
      }
    },
  };

  public monthLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  public labels: string[] = [];
  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';

  normalizeDataToChart() {
    
    this.assetsData = MockWorthDebtData.worth;
    this.debtData = MockWorthDebtData.debt;

    this.assetsData.forEach(a => this.assetsChartData.push(a.amount));
    this.debtData.forEach(a => this.debtChartData.push(a.amount));

    let times = (this.assetsData.length > this.debtData.length) ?
    this.assetsData.length : this.debtData.length;
    
    let debtdcom = this.assetsData[0].date.getMonth();
    let worthdcom = this.debtData[0].date.getMonth();
    let startMonth = (worthdcom <= debtdcom) ? worthdcom : debtdcom;

    for (let index = 0; index < times - 1; index++) {
      this.labels.push(this.monthLabels[startMonth + index]);
      this.worthChatData[index] = this.assetsChartData[index] - this.debtChartData[index];
    }

    this.chart?.update();
  }

  public chartData = [
    {
      data: this.assetsChartData,
      label: 'Assets',
      backgroundColor: "#2f4d2d55",
      borderColor: "#2f4d2d",
      pointBackgroundColor: "#2f4d2d",
      pointBorderColor: "#2f4d2d",
      showLine: true,
      fill: true
    },
    {
      data: this.debtChartData,
      label: 'Debts',
      backgroundColor:"#aa000055",
      borderColor: "red",
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      showLine: true,
      fill: true
    },
    {
      data: this.worthChatData,
      label: 'Worth',
      backgroundColor:"#00aa0055",
      borderColor: "green",
      pointBackgroundColor: "green",
      pointBorderColor: "green",
      showLine: true,
      fill: true
    },
  ];


  
  ngOnInit(): void {
  }



}
