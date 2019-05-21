import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {

  @Input()contacts
  @Input()avatarUrl = './assets/img/profileDft.jpg'
  @Input()showBtn = true
  constructor() { }

  ngOnInit() {
  }

}
