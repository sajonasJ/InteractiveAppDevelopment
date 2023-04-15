import { Component } from '@angular/core';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  

  contacts = ["jack", "john", "james"];
  constructor() { }

  addContact() {
    let name: string | null = prompt("Enter contact name");
    if (name) {
      this.contacts.push(name);
    }
  }
  editContact(index:number) {
    let name: string|null= prompt("Contact name", this.contacts[index]);
    this.contacts[index] = name!;
  }
  deleteContact(index:number){
    let name: string|null= prompt("Contact name", this.contacts[index]);
if (confirm("Delete"+this.contacts[index]+"?"))
    this.contacts.splice(index,1);
  }

}