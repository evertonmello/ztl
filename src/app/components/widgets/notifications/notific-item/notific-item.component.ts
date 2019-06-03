import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notific-item',
  templateUrl: './notific-item.component.html',
  styleUrls: ['./notific-item.component.scss']
})
export class NotificItemComponent implements OnInit {

  addContactTgl = false;
  contact = [{
    firstName: 'Everton',
    nickname: '@tom'
  }]

  constructor() { }

  ngOnInit() {
  }

}
