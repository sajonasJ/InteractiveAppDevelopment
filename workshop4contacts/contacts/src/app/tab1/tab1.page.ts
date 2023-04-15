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

  // Method to present a modal for adding a new contact
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });

    // Event listener for when the modal is dismissed
    modal.onDidDismiss().then((retval) => {
      // Check if modal was dismissed with 'done' role and has data
      if (retval.role === 'done' && retval.data) {
        // Extract contact data from modal and add to contacts array
        const newContact = {
          fName: retval.data.fName,
          lName: retval.data.lName,
          eMail: retval.data.eMail
        };
        this.contacts.push(newContact);
      }
    });

    return modal.present(); // Display the modal
  }

  // Method to present a modal for editing an existing contact
  async editModal(index: number) {
    const contact = this.contacts[index];
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        fName: contact.fName,
        lName: contact.lName,
        eMail: contact.eMail
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
          eMail: retval.data.eMail
        };

        const index = this.contacts.findIndex(c => c === contact);
        this.contacts[index] = editedContact;
      }
    });

    return modal.present(); // Display the modal
  }

  // Method to delete a contact from the contacts array
  deleteContact(index: number) {
    if (confirm("Delete " + this.contacts[index] + "?"))
      this.contacts.splice(index, 1);
  }
}