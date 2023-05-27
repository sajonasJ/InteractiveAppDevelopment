import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';


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
  imageFile: string =" ";
  imageFiles: string[] = []; 
  constructor(private serviceService: ServiceService,/* private imagePicker: ImagePicker*/) { }

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



  imageSelected(files: FileList) {
    let fileReader = new FileReader();
  
    fileReader.onload = (e) => {
      this.imageFile = fileReader.result as string;
    };
  
    fileReader.readAsDataURL(files[0]);
  
    if (files.length > 0) {
      this.imageFiles = [];
      for (var i = 0; i < files.length; i++) {
        this.read(files[i]);
      }
    }
  }
  
  read(file: File) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.imageFile = fileReader.result as string;
    };
    fileReader.readAsDataURL(file);
  }



  getPictures() {
    const options = {
      width: 200,
      quality: 25,
      outputType: 1
    };
  
    // this.imagePicker.getPictures(options).then((results) => {
    //   for (let i = 0; i < results.length; i++) {
    //     console.log('Image URI: ' + results[i]);
    //   }
    // }).catch((error) => {
    //   console.error('Error selecting images:', error);
    // });
  }
  
  


}