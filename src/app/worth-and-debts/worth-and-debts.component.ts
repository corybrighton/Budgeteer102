import { Component, OnInit } from '@angular/core';
import { ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-worth-and-debts',
  templateUrl: './worth-and-debts.component.html',
  styleUrls: ['./worth-and-debts.component.scss']
})
export class WorthAndDebtsComponent implements OnInit {

  constructor() { }

  public debtData = [
    { x: 1, y: 65 },
    { x: 2, y: 59 },
    { x: 3, y: 60 },
    { x: 4, y: 51 },
    { x: 5, y: 50 },
    { x: 6, y: 55 },
    { x: 7, y: 50 },
    { x: 8, y: 40 },
    { x: 9, y: 45 },
    { x: 10, y: 50 },
    { x: 11, y: 40 },
    { x: 12, y: 30 }];
    public worthData = [
    { x: 1, y: 25 },
    { x: 2, y: 26 },
    { x: 3, y: 27 },
    { x: 4, y: 28 },
    { x: 5, y: 29 },
    { x: 6, y: 30 },
    { x: 7, y: 31 },
    { x: 8, y: 32 },
    { x: 9, y: 33 },
    { x: 10, y: 34 },
    { x: 11, y: 35 },
      { x: 12, y: 36 }];
  
    // { x: "Jan", y: 25 },
    // { x: "Feb", y: 26 },
    // { x: "Mar", y: 27 },
    // { x: "Apr", y: 28 },
    // { x: "May", y: 29 },
    // { x: "Jun", y: 30 },
    // { x: "Jul", y: 31 },
    // { x: "Aug", y: 32 },
    // { x: "Sep", y: 33 },
    // { x: "Oct", y: 34 },
    // { x: "Nov", y: 35 },
    // { x: "Dec", y: 36 }];
  public scatterChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
      x: {
        min: 1
      }
    },
  };

  public scatterChartLegend = true;

  public scatterChartType: ChartType = 'scatter';

  public chartData = [
    {
      data: this.worthData,
      label: 'Worth',
      backgroundColor: "#2f4d2d55",
      borderColor: "#2f4d2d",
      showLine: true,
      fill: true
    },
    {
      data: this.debtData,
      label: 'Debts',
      backgroundColor:"red",
      borderColor: "red",
      showLine: true,
      fill: true
    },
  ];


  
  ngOnInit(): void {
  }



}
