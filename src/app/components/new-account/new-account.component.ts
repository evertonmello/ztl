import { Component, OnInit, OnChanges } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  upper = new RegExp('[A-Z]', '');
  lower = new RegExp('[a-z]', '');
  numb = new RegExp('[0-9]', '');
  termChecked = false
  password: string = '';
  iptType:string = 'password'
  emailErrorMsg = "Este nome de usuário já está sendo usado"
  passwordVldt = {
    number:false,
    upper:false,
    lower:false,
    size:false
  }
  validPassword = false
  value = 25;  
  step = 1
  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkPass(event){
    this.passwordVldt.upper =  this.upper.exec(this.password)? true:false
    this.passwordVldt.lower =  this.lower.exec(this.password)? true:false
    this.passwordVldt.number =  this.numb.exec(this.password)? true:false
    this.passwordVldt.size  = this.password.length > 5? true:false; 
    this.validPassword = false;

    if(this.passwordVldt.size && this.passwordVldt.number &&  this.passwordVldt.lower &&   this.passwordVldt.upper){
      this.validPassword = true;
    }
  }

  nextStep(){
    this.step = this.step + 1;  
    this.value = this.step * 25;
  }

  togglePassword(){
    this.iptType = this.iptType == 'password'? 'text':'password'
  }

  goToAddContacts(){
    this.router.navigateByUrl('addContacts');
  }

  goToHome(){
    this.router.navigateByUrl('home')
  }

}
