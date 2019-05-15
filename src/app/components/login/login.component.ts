import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputView = false;
  constructor(private router: Router  ) { }

  ngOnInit() {
  }

  showInput(){
    this.inputView = true;
  }

  navgtToNewAccount(){
    this.router.navigateByUrl('/newAccount');
  }

}
