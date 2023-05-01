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
  birthDay: string;
  contacts = [{}];
  constructor(private modalController: ModalController) {
    this.fName = '';
    this.lName = '';
    this.eMail = '';
    this.birthDay = '';
  }

  ngOnInit() {
    const contact = this.modalController.getTop().then(modal => {
         // Get the topmost modal in the modal stack
      const contactData = modal!.componentProps!['contact'];
      if (contactData) {
        // Pre-fill form fields with received contact data
        this.fName = contactData.fName;
        this.lName = contactData.lName;
        this.eMail = contactData.eMail;
        this.birthDay = contactData.birthDay;
      }
    });
  }

  closemodal() {
      // func that when modal is closed, pass back new contact data object and inform modal controller
    const newContact = {
      fName: this.fName,
      lName: this.lName,
      eMail: this.eMail,
      birthDay: this.birthDay
    };

    this.contacts.push(newContact);
    this.modalController.dismiss(newContact, 'done');
  }
}



