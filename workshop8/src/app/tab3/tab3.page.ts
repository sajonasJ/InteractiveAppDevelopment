import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name = "";
  constructor(private router: Router, private storage: Storage) {
    storage.get("name").then(val => {
      this.name = val;
    });
  }
  async init() {
    const storage = await this.storage.create();
    this.name = await this.storage.get("name");
  }
  login() {
    this.storage.set("name", this.name);
  }
  getName() {
    this.storage.get("name").then(val => {
      this.name = val;


    });
  }
}
