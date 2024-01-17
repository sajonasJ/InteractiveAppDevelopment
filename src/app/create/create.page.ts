import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  fName: string = '';
  lName: string = '';
  eMail: string = '';
  bDate: string = '';
  contacts: any[] = [];
  passWord: string = '';
  passWord2: string = '';

  constructor(
    private modalController: ModalController,
    private storageService: ServiceService
  ) {// Initialize storage
    this.contacts = []; // Initialize contacts as an empty array
  }

  ngOnInit() { }

  clickClose() {
    this.modalController.dismiss();
  }

  async saveData() {
    const newContact = {
      fName: this.fName,
      lName: this.lName,
      eMail: this.eMail,
      bDate: this.bDate,
      passWord: this.passWord,
      passWord2: this.passWord2
    };
  
    this.contacts.push(newContact);
    console.log('Data saved:', newContact);
  
    await this.storageService.saveData(newContact); // Save new contact to the storage
  
    this.modalController.dismiss(newContact, 'done');
  }
  

  getDate(event: any) {
    let date = event.detail.value;
    if (date !== null) {
      this.bDate = date; 
    }
    console.log(date)
  }

}
