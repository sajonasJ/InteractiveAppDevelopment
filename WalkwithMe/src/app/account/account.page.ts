
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

interface Contact {
  fName: string;
  lName: string;
  eMail: string;
  bDate: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {
  contacts: Contact[] = [];

  constructor(private serviceService: ServiceService) {}

  async ngOnInit() {
    // Retrieve data when the component is initialized
    await this.retrieveData();
  }

  async saveData() {
    await this.serviceService.saveData(this.contacts);
    console.log('Data saved:', this.contacts);
  }

  async retrieveData() {
    const data = await this.serviceService.getData();
  
    // If no data is retrieved, set a default contact
    if (data === null || data.length === 0) {
      this.contacts = [{
        fName: 'Johan',
        lName: 'Poopy',
        eMail: 'youremail@fakemail.com',
        bDate: '2023-06-13T00:00:00.000Z' // Replace with your desired default dat
      
      }];
      console.log('No data retrieved. Set a default contact:', this.contacts);
    } else {
      // If data is a single object, put it into an array
      let dataForContacts = Array.isArray(data) ? data : [data];
      this.contacts = dataForContacts;
      console.log('Retrieved data:', this.contacts);
    }
  }
  

  getFName() {
    let fName = prompt('Enter First Name');
    if (fName !== null) {
      this.contacts[0].fName = fName;
    }
  }

  getLName() {
    let lName = prompt('Enter Last Name');
    if (lName !== null) {
      this.contacts[0].lName = lName;
    }
  }

  getEmail() {
    let email = prompt('Enter Email');
    if (email !== null) {
      this.contacts[0].eMail = email;
    }
  }

  getDate(event: any) {
    let date = event.detail.value; 
    if (date !== null) {
      this.contacts[0].bDate = date;
    }
  }
  
  


}
