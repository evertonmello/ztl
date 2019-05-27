import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  strikeThrough = false;
  justifyLeft = false;
  justifyCenter = false;
  justifyRight = false;
  justifyFull = false;
  insertUnorderedList = false;
  buttons = ['bold','italic','underline','strikeThrough','justifyLeft','justifyCenter','justifyRight','justifyFull','insertUnorderedList','camera']
  camera = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params.selectedTab || 0
      this.lastPage = params.lastPage || 'search'
    });
   }

  ngOnInit() {
  }

  setStyle(style){
    document.execCommand(style, false, '');
    var styleVar = style.replace("-", "_");
    this[styleVar] = !this[styleVar];
  }
  
  tglBtn(btn){
   return this[btn]
  }
  close(){
    this.router.navigate([this.lastPage], { queryParams: {
      profileId: 1,
      lastPage: this.lastPage,
      postSearch: true,
      selectedTab: this.selectedTab} 
   });
  }

}
