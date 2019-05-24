import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-all',
  templateUrl: './result-all.component.html',
  styleUrls: ['./result-all.component.scss']
})
export class ResultAllComponent implements OnInit {

  icoOpt = 'search'
  resultTitle
  constructor(private router:Router, private activatedRoute :ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.resultTitle = params.title
    });  
  }

  ngOnInit() {
  }

  backToGenericSearc(){
    this.router.navigate(['/search'], { });
  }

  checkIcon(ipt){
    this.icoOpt = ipt.value? 'clear': 'search'
  }

}
