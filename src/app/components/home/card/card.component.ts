import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()avatarUrl = './assets/img/avatar2.jpg';
  contacts = [{
    firstName: 'Everton',
    nickname: '@tom'
  }]
  constructor() { }

  ngOnInit() {
  }

}
