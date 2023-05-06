import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  timesClicked: number = 0;
  placeholder: string = "Username";
  id = "";
  constructor(private router: Router) { }

  incrementCounter() {
    this.timesClicked = this.timesClicked + 1;
  }

  login() {
    this.router.navigateByUrl("/account/" + this.id);
    this.incrementCounter();
    this.id = "";

  }
}
