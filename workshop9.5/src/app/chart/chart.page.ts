import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  chart: any;
  tel?: number;
  donuts:number[]= [];
  telName:string="";
  nameLabel = [ 'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth']
  @ViewChild('healthChart', { static: true }) canvas: any;

  constructor() {
   }

  ngOnInit() {

    for (let i = 0; i < 4; i++) {
      this.donuts.push(this.donuts[i] = Math.floor(Math.random() * 100) + 1);
    }
    let colorsArr = [];
    for (let i = 0; i < 5; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let color = 'rgb(' + r + ',' + g + ',' + b + ')';
      colorsArr.push(color);

    }
    const myChart = {
      labels:this.nameLabel,
      datasets: [{
        label: 'My First Dataset',
        data: this.donuts
        ,
        backgroundColor: colorsArr,
        hoverOffset: 20,
      }]
    };

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'doughnut',
      data: myChart,
    });
  }

  addNum() {
    this.donuts.push(this.tel!);
    this.nameLabel.push(this.telName);
    this.chart.update();
  }
}