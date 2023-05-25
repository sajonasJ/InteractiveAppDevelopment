import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  storedData: any;
  name: string = "";
  notif: boolean = false;
  reminder: string = "";

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
  saveData(data: any) {
    return this.storage.set('storedData', data);
   
  }

  getData() {
    return this.storage.get('storedData');
  }
}
