import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  defaults: { [key: string]: string | number | boolean } = {
    'fname': '',  // first name
    'lname': '',  // last name
    'email': '',  // email
    'getDate': '',  // get date
    'stepGoals': 0,
    'distanceGoals': 0,
    'darkmode':false
  }
  storedData: any;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storedData = await this.storage.get('storedData');
    console.log('service retrieved data:', this.storedData)
    
    for (let key in this.defaults) {
      if (await this.storage.get(key) == null) {
        await this.storage.set(key, this.defaults[key]);
      } else {
        this.defaults[key] = await this.storage.get(key);
      }
    }
    console.log('service retrieved data:', this.defaults)
  }

  async saveData(data: any) {
    console.log('service saved data:', data)
    await this.storage.set('storedData', data);
    // Save each key-value pair individually as well
    for (let key in data) {
      await this.storage.set(key, data[key]);
      this.defaults[key] = data[key]; // updating the defaults as well
    }
  }

  getData() {
    return this.storage.get('storedData');
  }
}