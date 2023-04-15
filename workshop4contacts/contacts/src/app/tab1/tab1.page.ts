import { Component } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  contacts = [{
    fName: "Johan",
    lName: "Poopy",
    eMail: "atHotMail.com"
  }, {
    fName: "Sheldon",
    lName: "Cooper",
    eMail: "atHotMail.com"
  }];

  constructor(private modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss().then((retval) => {
      if (retval.role === 'done' && retval.data) {
        // Add the new contact to the contacts array
        const newContact = {
          fName: retval.data.fName,
          lName: retval.data.lName,
          eMail: retval.data.eMail
        };
        this.contacts.push(newContact);
      }
    });
    return modal.present();
  }
  deleteContact(index: number) {
    if (confirm("Delete "+ this.contacts[index] + "?"))
      this.contacts.splice(index, 1);
  }
}