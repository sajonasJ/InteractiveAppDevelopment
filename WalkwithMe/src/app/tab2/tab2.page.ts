import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  darkMode = false;
  
  constructor(private router: Router) {
    this.updateDarkMode();
  }

  ngOnInit() {}

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
}
