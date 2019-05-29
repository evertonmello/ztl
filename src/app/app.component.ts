import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
