import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchAComponent implements OnInit {
  contacts = [{
    firstName: 'Everton',
    nickname: '@tom'
  },{
    firstName: 'Everton',
    nickname: '@tom'
  },{
    firstName: 'Everton',
    nickname: '@tom'
  }];

  resultPage = false

  searchItens = ['Pessoas', 'Música', 'Cinema', 'Literatura']
  constructor(private router:Router) { }

  ngOnInit() {
  }

  backPage(){
    this.router.navigateByUrl('home')
  }
  search(){
    this.resultPage = true;
  }

}
