import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slide } from './animations';


declare var device;
declare var cordova;
declare var navigator;
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
  url = './assets/img/avatar1.jpg'
  logged = false

  constructor(private router:Router){

  }

  ngOnInit() {
    this.logged = window.localStorage.getItem('isLogged')? JSON.parse(window.localStorage.getItem('isLogged')):false;
    if(this.logged ){
      this.router.navigateByUrl('home')
    }
  } 

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
