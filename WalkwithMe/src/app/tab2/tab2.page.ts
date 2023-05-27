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
  stepGoals: number=0;
  distanceGoals: number=0;
  
  constructor(private router: Router,private service: ServiceService) {
    this.updateDarkMode();
  }

  ngOnInit() {
    this.loadGoals();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.updateDarkMode();
    console.log('Dark mode is: ', this.darkMode ? 'Off' : 'On');
  }
  private updateDarkMode() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  private async loadGoals() {
    const storedData = await this.service.getData();
    this.stepGoals = storedData?.stepGoals || 0;
    this.distanceGoals = storedData?.distanceGoals || 0;
  }
  saveGoals() {
    this.service.saveData({ stepGoals: this.stepGoals, distanceGoals: this.distanceGoals });
    console.log('Goals saved successfully!');
  }
}
