import { Component,Input, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'notific-item',
  templateUrl: './notific-item.component.html',
  styleUrls: ['./notific-item.component.scss']
})
export class NotificItemComponent implements OnInit {

  @Input()item;
  @Input()all = false;
  addContactTgl = false;
  contact = [{
    firstName: 'Everton',
    nickname: '@tom'
  }]
  ntfAddDesc = "Gostaria de te adicionar como amigo";
  ntfPreview = "Hahaha meu, o que você tá falando?"
  constructor() { }

  ngOnInit() {
  }

}
