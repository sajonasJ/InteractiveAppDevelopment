import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name="john"
  constructor(private storage: Storage
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }
}
