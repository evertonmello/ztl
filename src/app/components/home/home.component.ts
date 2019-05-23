import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Router,ActivatedRoute} from '@angular/router';

import 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url = "./assets/img/bey.jpg"
  cards = [1,2,3,4,5,6,7,8,2,3]
  friendsFavs = [1,2,3,4,5,6,7,8];
  overlay = false;
  page = 1;
  px = 0
  @ViewChild('feed')feed :ElementRef
  constructor(private _sanitizer: DomSanitizer,private router: Router,
    private activatedRoute: ActivatedRoute, private elem: ElementRef) {
  }

  ngOnInit() {

  }

  swipe(dir){
    let elements = this.elem.nativeElement.querySelectorAll('.cardContainer');
    if(dir == 'left'){
      this.px = this.px - (parseFloat(elements[0].clientWidth) + 20);
    }else{
      this.px = this.px + (parseFloat(elements[0].clientWidth) + 20);
    }

    this.feed.nativeElement.style.transition = "all 300ms";
    this.feed.nativeElement.style.transform = "translateX(" + this.px +"px)"

    this.page++

  }
  showOverlay(){
    this.overlay = !this.overlay;
  }

  getBackground(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.150) 50%,    
      rgba(0, 0, 0, 0.350) 70%,    
      rgba(0, 0, 0, 0.771) 95%,    
      rgba(0, 0, 0, 0.801) 100%), url(${image}) `);
  }

  searchToPost(triggerBtn, content){
    if(!this.overlay || triggerBtn ){
      this.router.navigate(['/search'], { queryParams: { opt: content} });
    }
  }

  search(){
    this.router.navigate(['/search'], { queryParams: { opt: 'search'} });
  }
}
