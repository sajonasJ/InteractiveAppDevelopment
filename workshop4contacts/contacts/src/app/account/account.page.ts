import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public id: string | null = "";
  routeParamSubscription: Subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,

  ) { }



  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOndestroy() {
    this.routeParamSubscription.unsubscribe();
  }


}

