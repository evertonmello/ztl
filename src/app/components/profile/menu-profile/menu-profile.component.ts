import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent implements OnInit {

  @Output()closeMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  setMenuView(){
    this.closeMenu.emit();
  }

}
