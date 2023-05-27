import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  darkMode = false;
  stepGoals: number = 0;
  distanceGoals: number = 0;

  constructor(
    private router: Router,
    private service: ServiceService) {
  }


  async ngOnInit() {
    await this.loadGoals();
  }


  private async loadGoals() {
    const storedData = await this.service.getData();
    this.stepGoals = storedData?.stepGoals || 0;
    this.distanceGoals = storedData?.distanceGoals || 0;
    this.darkMode = storedData?.darkMode;
  }
  async saveGoals() {
    let storedData = await this.service.getData();
    if (storedData === null) {
      storedData = {};
    }

    storedData.stepGoals = this.stepGoals;
    storedData.distanceGoals = this.distanceGoals;
    storedData.darkMode = this.darkMode;

    await this.service.saveData(storedData);
    console.log('Goals saved successfully!');
  }

  async toggleDarkMode() {
    // this.darkMode = !this.darkMode;
   await this.saveGoals();
  }
}
