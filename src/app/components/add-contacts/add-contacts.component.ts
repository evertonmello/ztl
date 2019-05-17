import { Component, OnInit } from '@angular/core';
declare var navigator; 

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

  users = []
  constructor() { }

  ngOnInit() {
      navigator.contactsPhoneNumbers.list((ctcts) =>{
          this.users = ctcts;
          console.log(this.users)
      })
  }

}
