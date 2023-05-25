import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  fName: string;
  lName: string;
  eMail: string;
  birthDay: string;
  contacts: any[] = []; 
  storedData: any;
  name: string = "";
  notif: boolean = false;
  reminder: string = "";

  constructor(
    private modalController: ModalController,
    private service: ServiceService,
    private storage: Storage
    ){
    this.fName = '';
    this.lName = '';
    this.eMail = '';
    this.birthDay = '';
  }

  ngOnInit() {}

  closemodal() {
    const newContact = {
      fName: this.fName,
      lName: this.lName,
      eMail: this.eMail,
      birthDay: this.birthDay,
    };

    this.contacts.push(newContact);
    this.modalController.dismiss(newContact, 'done');
  }
  click(){
    this.modalController.dismiss(console.log('here'), 'done');

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
