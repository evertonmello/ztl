import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

  users = [1,2,3,4,5,5,2,3,4,5,5,2,3,4,5,5]
  constructor() { }

  ngOnInit() {
  }

}
