import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  contacts = [{
    firstName: 'Everton',
    nickname: '@tom'
  }]
  constructor() { }

  ngOnInit() {
  }

}
