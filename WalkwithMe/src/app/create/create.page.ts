import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  fName: string;
  lName: string;
  eMail: string;
  birthDay:string;
  contacts = [{}]; // Array to store contacts, currently initialized with an empty object
  constructor(private modalController: ModalController) {
    this.fName = '';
    this.lName = '';
    this.eMail = '';
    this.birthDay='';
  }

  ngOnInit() {
    // Get the topmost modal in the modal stack
    const contact = this.modalController.getTop().then(modal => {
      const contactData = modal!.componentProps!['contact'];
      if (contactData) {
        // Pre-fill form fields with received contact data
        this.fName = contactData.fName;
        this.lName = contactData.lName;
        this.eMail = contactData.eMail;
        this.birthDay=contactData.birthDay;
      }
    });
  }

  // Method to close the modal and pass back new contact data
  closemodal() {
    const newContact = {
      fName: this.fName,
      lName: this.lName,
      eMail: this.eMail,
     birthDay: this.birthDay
    };

    this.contacts.push(newContact); // Add new contact to the contacts array
    this.modalController.dismiss(newContact, 'done'); // Dismiss the modal with the 'done' role and pass back new contact data
  }
}



