import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  contacts = [{
    fName: "Johan",
    lName: "Poopy",
    eMail: "youremail@fakemail.com",
    birthDay: "1-Jan-2077"
  }];

  constructor(private modalController: ModalController) { }

  async presentModal() {
    // func to present a modal for adding a new contact
    const modal = await this.modalController.create({
      component: CreatePage,
    });

    modal.onDidDismiss().then((retval) => {
      // Check if modal was dismissed with 'done' role and has data
      if (retval.role === 'done' && retval.data) {
        // Extract contact data from modal and add to contacts object array
        const newContact = {
          fName: retval.data.fName,
          lName: retval.data.lName,
          eMail: retval.data.eMail,
          birthDay: retval.data.birthDay
        };
        this.contacts.push(newContact);
      }
    });
    return modal.present();
  }

  async editModal(index: number) {
    // Method to present a modal for editing an existing contact
    const contact = this.contacts[index];
    const modal = await this.modalController.create({
      component: CreatePage,
      componentProps: {
        fName: contact.fName,
        lName: contact.lName,
        eMail: contact.eMail,
        birthDay: contact.birthDay,
      }
    });

    modal.onDidDismiss().then((retval) => {
      // Check if modal was dismissed with 'done' role and has data
      if (retval.role === 'done' && retval.data) {
        // Extract edited contact data from modal and update the contacts array
        const editedContact = {
          fName: retval.data.fName,
          lName: retval.data.lName,
          eMail: retval.data.eMail,
          birthDay: retval.data.birthDay
        };

        const index = this.contacts.findIndex(c => c === contact);
        // Set index of data to edited index
        this.contacts[index] = editedContact;
      }
    });
    return modal.present();
  }
}