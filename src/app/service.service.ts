import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  defaults: { [key: string]: string | number | boolean } = {
    'fname': '',
    'lname': '',
    'email': '',
    'bDate': '',
    'stepGoals': 0,
    'distanceGoals': 0,
    'darkmode':false,
    'passWord':''
  }
  storedData: any;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storedData = await this.storage.get('storedData');
    console.log('service retrieved data:1', this.storedData)
  
    for (let key in this.defaults) {
      if (await this.storage.get(key) == null) {
        await this.storage.set(key, this.defaults[key]);
      } else {
        this.defaults[key] = await this.storage.get(key);
      }
    }
    console.log('service retrieved data:2', this.defaults)
  }
  

  async saveData(data: any) {
    console.log('service saved data:', data)
    await this.storage.set('storedData', data);
    for (let key in data) {
      await this.storage.set(key, data[key]);
      this.defaults[key] = data[key]; 
    }
  }

  getData() {
    return this.storage.get('storedData');
  }
}