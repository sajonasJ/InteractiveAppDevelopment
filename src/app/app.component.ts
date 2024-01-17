import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();
    console.log('Storage initialized');

    await SplashScreen['hide']();


    await SplashScreen['show']({
      showDuration: 2000,
      autohide: true,
    })
  }
}
