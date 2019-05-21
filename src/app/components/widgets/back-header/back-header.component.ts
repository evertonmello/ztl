import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss']
})
export class BackHeaderComponent implements OnInit {

  @Output()back = new EventEmitter();
  @Input()title = 'O que você está buscando'
  @Input()shadow = false
  constructor() { }

  ngOnInit() {
  }

  backPage(){
    this.back.emit()
  }
}
