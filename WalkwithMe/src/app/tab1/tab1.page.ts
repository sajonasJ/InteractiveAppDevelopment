import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  storedData: any;
  name: string = "";
  notif: boolean = false;
  reminder: string = "";

  constructor(private service: ServiceService, private storage: Storage) {
    this.onInit();

  }
  async onInit() {
    this.storedData = await this.storage.get('storedData');
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
}
