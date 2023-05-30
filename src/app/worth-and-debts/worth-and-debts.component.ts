import { Component, OnInit } from '@angular/core';
import { ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-worth-and-debts',
  templateUrl: './worth-and-debts.component.html',
  styleUrls: ['./worth-and-debts.component.scss']
})
export class WorthAndDebtsComponent implements OnInit {

  constructor() { }

  public debtData = [65, 59, 60, 51, 56, 55, 40, 60, 20, 50, 54, 45];
  public worthData = [45, 35, 10, 45, 56, 55, 70, 80, 50, 60, 54, 80];
  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scale: {
      min: 0
    }
  };

  public monthLables = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public lineChartLegend = true;

  public lineChartType: ChartType = 'line';

  public chartData = [
    {
      data: this.worthData,
      label: 'Worth',
      backgroundColor: '#2f4d2d55',
      borderColor: '#2f4d2d',
      pointBackgroundColor: '#2f4d2d55',
      fill: 'origin'
    },
    {
      data: this.debtData,
      label: 'Debts',
      backgroundColor: "#463d2e55",
      borderColor: '#463d2e',
      pointBorderColor: '#463d2e',
      pointHoverBackgroundColor: '#463d2e',
      pointHoverBorderColor: '#463d2e',
      fill: 'origin',
    },
  ];


  
  ngOnInit(): void {
  }



}
