import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { slide } from './animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide
  ]
})

export class AppComponent {
  title = 'app';
  ngOnInit(){
 /*    var applaunchCount = window.localStorage.getItem('firstLaunch');
    if(!applaunchCount){
      window.localStorage['firstLaunch'] = 'true';
    } */
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
