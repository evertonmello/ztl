import { Component,Input, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'notific-item',
  templateUrl: './notific-item.component.html',
  styleUrls: ['./notific-item.component.scss']
})
export class NotificItemComponent implements OnInit {

  @Input()item;
  addContactTgl = false;
  contact = [{
    firstName: 'Everton',
    nickname: '@tom'
  }]

  constructor() { }

  ngOnInit() {
  }

}
