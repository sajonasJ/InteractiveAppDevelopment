import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
 

  constructor(private route: ActivatedRoute,private router:Router,) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/tab2/:id');
  }

  loadAccountName(){

  }

}
