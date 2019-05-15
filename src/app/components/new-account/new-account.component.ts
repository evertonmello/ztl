import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  value = 25;
  step = 1
  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextStep(){
    this.step = this.step + 1;  
    this.value = this.step * 25;
  }

  goToAddContacts(){
    this.router.navigateByUrl('addContacts');
  }

  goToHome(){
    this.router.navigateByUrl('home')
  }

}
