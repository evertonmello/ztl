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
  selectedTab = 0;
  constructor(private router:Router, private activatedRoute :ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.resultTitle = params.title
      this.selectedTab = params.selectedTab;
    });  
  }

  ngOnInit() {
  }

  backToGenericSearc(){
    this.router.navigate(['/search'], { queryParams: { selectedTab: this.selectedTab} });
  }

  checkIcon(ipt){
    this.icoOpt = ipt.value? 'clear': 'search'
  }

}
