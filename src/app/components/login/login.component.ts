import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailErrorMsg = ''
  x = 0
  home = 0
  inputView = 0;
  constructor(private router: Router  ) { }

  ngOnInit() {
  }

  showInput(){
    this.inputView = 1;
    this.home++
    if(this.home == 2){this.router.navigateByUrl('/home');}
    
  }

  validateEmail(){
    this.inputView = 2;
    this.x ++;
    //TODO.. validação no servidor do email....
    if(this.x ==2 ){
      this.emailErrorMsg =  "Email não cadastrado para voucher"
    }


    if(this.x ==3 ){
      this.router.navigateByUrl('/newAccount');
    }
  }

  navgtToNewAccount(){
    this.router.navigateByUrl('/newAccount');
  }

}
