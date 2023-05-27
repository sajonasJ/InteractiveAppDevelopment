import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../service.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  stepGoals: number = 0;
  chart:any;
  storedData: any;
  name: string = '';
  notif: boolean = false;
  reminder: string = '';
  week:string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  @ViewChild('healthChart', { static: false }) canvas: any;

  constructor(private service: ServiceService, private storage: Storage) {
    this.onInit();

  }
  async onInit() {
    this.storedData = await this.storage.get('storedData');
    this.loadStepGoals();
  }


  async saveData() {
    await this.storage.set('storedData', {
      name: this.name,
      notif: this.notif,
      reminder: this.reminder
    });
    this.storedData = {
      name: this.name,
      notif: this.notif,
      reminder: this.reminder
    };
    console.log(this.storedData);
  }

  

  ionViewDidEnter() {
    // const labels = this.week;
    const myBar = {
      labels: this.week,
      datasets: [{
        label: 'Weekly Steps',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: myBar,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

  }

  async loadStepGoals() {
    const storedData = await this.service.getData();
    this.stepGoals = storedData?.stepGoals || 0;
  }
}
