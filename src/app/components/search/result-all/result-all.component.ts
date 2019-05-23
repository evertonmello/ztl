import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result-all',
  templateUrl: './result-all.component.html',
  styleUrls: ['./result-all.component.scss']
})
export class ResultAllComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backToGenericSearc(){
    this.router.navigate(['/search'], { queryParams: { opt: 'search'} });

  }

  

}
