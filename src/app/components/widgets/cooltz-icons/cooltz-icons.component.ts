import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'cooltz-icons',
  templateUrl: './cooltz-icons.component.html',
  styleUrls: ['./cooltz-icons.component.scss']
})
export class CooltzIconsComponent implements OnInit {

  @Input()name;
  @Input()width;
  @Input()height;
  @Input()color;
  constructor() { }

  ngOnInit() {
  }

}
