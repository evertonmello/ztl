import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {


  ntfcations = [{
    type:0,
    ntfc:"asddsadsa"
  },
  {
    type:0,
    ntfc:"asddsadsa"
  },
  {
    type:1,
    ntfc:""
  },
  {
    type:0,
    ntfc:"asddsadsa"
  },
  {
    type:1,
    ntfc:""
  },{
    type:0,
    ntfc:"asddsadsa"
  },
  {
    type:1,
    ntfc:""
  },]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  backHome(){
    this.router.navigateByUrl('home');
  }
}
