import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
// export class AccountPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



export class AccountPage implements OnInit {
  public id: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }


}