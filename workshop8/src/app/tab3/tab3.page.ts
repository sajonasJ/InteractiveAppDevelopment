import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name: string = "";
  notif: boolean = false;
  reminder: string = "";
  storedData: any;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storedData = await this.storage.get('storedData');

    if (this.storedData) {
      this.name = this.storedData.name;
      this.notif = this.storedData.notif;
      this.reminder = this.storedData.reminder;
    }

    if (await this.storage.get('name') == null) {
      await this.storage.set('name', '');
    }

    if (await this.storage.get('notif') == null) {
      await this.storage.set('notif', false);
    }

    if (await this.storage.get('reminder') == null) {
      await this.storage.set('reminder', '');
    }
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
