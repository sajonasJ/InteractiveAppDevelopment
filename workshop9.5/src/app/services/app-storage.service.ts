import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  // public storage: Storage;
  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();

    if (await this.storage.get('name') == null){
      await this.storage.set('name','');
    }

    if(await this.storage.get('showNotif') == null){
      await this.storage.set('showNotif', 'false');
    }

    if(await this.storage.get('reminder')==null){
      await this.storage.set('reminder','');
    }
  }

}