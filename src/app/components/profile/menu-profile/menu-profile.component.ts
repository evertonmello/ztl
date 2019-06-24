import { Component, OnInit, Output,EventEmitter,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss']
})
export class MenuProfileComponent implements OnInit {

  @Output()closeMenu = new EventEmitter();
  @Input()showMenu;
  localShowMenu = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  setMenuView(param){
    if(param == 'dentro' && this.localShowMenu ){
      this.router.navigate(['edit-profile'])
      
    }else{
      if(param == 'fora' && this.localShowMenu){
        this.closeMenu.emit();
      }
      this.localShowMenu = true;
    }

  }

  edit(){
    this.router.navigate(['edit-profile'])
  }

}
