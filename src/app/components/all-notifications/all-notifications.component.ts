import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {

  ntfcations = ['as','acdas','dassda','acdas','acdas','dassda','acdas','acdas','dassda','acdas']
  constructor(private router:Router) { }

  ngOnInit() {
  }

  backHome(){
    this.router.navigateByUrl('home');
  }
}
