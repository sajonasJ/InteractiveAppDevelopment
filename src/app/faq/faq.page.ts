import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {
public id: string | null =" ";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
