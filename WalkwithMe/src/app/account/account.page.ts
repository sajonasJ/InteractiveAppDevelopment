import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  contacts = [{
    fName: "Johan",
    lName: "Poopy",
    eMail: "youremail@fakemail.com",
    birthDay:"1-Jan-2077"
  }];

  constructor(private modalController: ModalController) { }

  // Method to present a modal for adding a new contact
  async presentModal(index: number) {
    const contact = this.contacts[index];
    const modal = await this.modalController.create({
      component: CreatePage,
      componentProps: {
        fName: contact.fName,
        lName: contact.lName,
        eMail: contact.eMail,
        birthDay:contact.birthDay,
      }
    });

    // Event listener for when the modal is dismissed
    modal.onDidDismiss().then((retval) => {
      // Check if modal was dismissed with 'done' role and has data
      if (retval.role === 'done' && retval.data) {
        // Extract contact data from modal and add to contacts array
        const newContact = {
          fName: retval.data.fName,
          lName: retval.data.lName,
          eMail: retval.data.eMail,
          birthDay: retval.data.birthDay
        };

        const index = this.contacts.findIndex(c => c === contact);
        this.contacts[index] = newContact;
      }
    });

    return modal.present(); // Display the modal
  }

  // Method to present a modal for editing an existing contact
  async editModal(index: number) {
    const contact = this.contacts[index];
    const modal = await this.modalController.create({
      component: CreatePage,
      componentProps: {
        fName: contact.fName,
        lName: contact.lName,
        eMail: contact.eMail,
        birthDay:contact.birthDay,
      }
    });

    // Event listener for when the modal is dismissed
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
        this.contacts[index] = editedContact;
      }
    });

    return modal.present(); // Display the modal
  }
}
