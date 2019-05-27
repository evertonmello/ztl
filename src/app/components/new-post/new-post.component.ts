import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  lastPage;
  selectedTab;
  
  bold = false;
  italic = false;
  underline = false;
  strike = false;
  leftJustify = false;
  centerJustify = false;
  rightJustify = false;
  justify = false;
  listUl = false;
  camera = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params.selectedTab || 0
      this.lastPage = params.lastPage || 'search'
    });
   }

  ngOnInit() {
  }

  close(){
    
    this.router.navigate([this.lastPage], { queryParams: {
      profileId: 1,
      lastPage: this.lastPage,
      postSearch: true,
      selectedTab: this.selectedTab} 
   });
  }

  tglIco(icon){
    this[icon] = !this[icon];
  }
}
