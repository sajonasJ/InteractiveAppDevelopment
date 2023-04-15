import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  fName: string;
  lName: string;
  eMail: string;
  contacts = [{}];
  constructor(private modalController: ModalController) {
    this.fName = '';
    this.lName = '';
    this.eMail = '';
  }

  ngOnInit() {

  }
  closemodal() {
    const newContact = {
      fName: this.fName,
      lName: this.lName,
      eMail: this.eMail
    };

    this.contacts.push(newContact);
    this.modalController.dismiss(newContact, 'done');
  }
}
