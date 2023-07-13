import { WorthModel } from './../models/worthModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
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
  }
  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public worthData!: WorthModel;

  public debtChartData: number[] = [];
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

  public labels: string[] = [];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  addAdverage() {
    
  }

  normalizeDataToChart() {
    // TODO add Data From server
    this.worthData = (environment.production) ? new WorthModel([],[]) : MockWorthDebtData;
    
    let assetsCurrent = this.worthData.assets[0];
    let assetsNext = this.worthData.assets[1];
    let assetsIndex = 2;
    
    let debtCurrent = this.worthData.debts[0];
    let debtNext = this.worthData.debts[1];
    let debtIndex = 2;
    
    let currentDateUsed = (assetsCurrent.date <= debtCurrent.date) ? assetsCurrent.date : debtCurrent.date;
    let history = this.monthDiff(currentDateUsed) - 1;
    
    for (let index = 0; index <= history; index++) {
      this.labels.push(`${currentDateUsed.getMonth() + 1}-${currentDateUsed.getFullYear().toString().slice(-2)}`);
      
      this.assetsChartData.push(assetsCurrent.amount);
      this.debtChartData.push(debtCurrent.amount);
      
      if (this.monthDiff(currentDateUsed, assetsCurrent.date) == 0) {
        assetsCurrent = assetsNext;
        assetsNext = (this.worthData.assets[assetsIndex]) ? this.worthData.assets[assetsIndex] : assetsCurrent;
        assetsIndex++;
      }
      
      if (this.monthDiff(currentDateUsed, debtCurrent.date) == 0) {
        debtCurrent = debtNext;
        debtNext = (this.worthData.debts[debtIndex]) ? this.worthData.debts[debtIndex] : debtCurrent;
        debtIndex++;
      }
      
      currentDateUsed.setMonth(currentDateUsed.getMonth() + 1);

      this.worthChatData[index] = this.assetsChartData[index] - this.debtChartData[index];
    }

    this.chart?.update();
  }

  monthDiff(start:Date, today:Date = new Date) {
    let months;
    months = (today.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += today.getMonth();

    return months <= 0 ? 0 : months;
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
  
  ngAfterContentInit(): void {
    this.normalizeDataToChart()
  }

}
