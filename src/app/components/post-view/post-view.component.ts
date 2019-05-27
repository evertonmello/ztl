import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  contacts = [{
    firstName: 'asddsa',
    nickname: '@adasd'
  }];

  comments = [
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
    {
      txt:"comentarioadsdasd .sad.das. dsa..das.ds  comentarioadsdasd .sad.das. dsa.. comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa..comentarioadsdasd .sad.das. dsa.."
    },
  ]
  avatarUrl = './assets/img/avatar3.jpg'
  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['home'])
  }
}
