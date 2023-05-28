import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  eMail: string = '';
  passWord: string = '';
  rememberMe: boolean = false;
  storedData: any;

  constructor(
    private modalController: ModalController,
    private storageService: ServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.storedData = await this.storageService.getData();
    console.log('this is the data:',this.storedData)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePage,
    });
    return modal.present();
  }

  async login() {
    console.log('Entered Email:', this.eMail);
    console.log('Entered Password:', this.passWord);

    // Check if the entered email and password match the stored data
    if (
      this.storedData &&
      this.storedData.eMail === this.eMail &&
      this.storedData.passWord === this.passWord
    ) {
      // Login successful
      this.router.navigate(['/tabs']);
      console.log('Login successful');
    } else {
      // Login failed
      console.log('Login failed');
      // Handle the failed login case, such as displaying an error message
    }
  }
}
