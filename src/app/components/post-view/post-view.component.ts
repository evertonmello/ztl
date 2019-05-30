import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
declare var document
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
  comment = ""
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
    window.scroll(0,0)
  }

  back(){
    this.router.navigate(['home'])
  }


  addComment() {
    this.comments.push({txt:this.comment})
    this.comment = ""
    setTimeout(() => {
      window.scrollTo({ left: 0, top: document.getElementById('descPostCtn').clientHeight, behavior: 'smooth' });

    }, 50);
  }

}
