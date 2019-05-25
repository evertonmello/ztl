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
  cards = ['./assets/img/avengers.jpg','./assets/img/shazam.png','./assets/img/a_star.jpg','./assets/img/avatar3.jpg']
  friendsFavs = [1,2,3,4,5,6,7,8];
  overlay = false;
  currentCard = 0;
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
        if(this.currentCard < (this.cards.length-1)){
          this.px = this.px - (parseFloat(elements[0].clientWidth) + 20);
          this.currentCard++
        }
      }else{
        if(this.currentCard > 0){
          this.px = this.px + (parseFloat(elements[0].clientWidth) + 20);
          this.currentCard--
        }
      }
    this.feed.nativeElement.style.transition = "all 300ms";
    this.feed.nativeElement.style.transform = "translateX(" + this.px +"px)"


  }
  showOverlay(){
    this.overlay = !this.overlay;
  }

  goToMyProfile(){
    this.router.navigate(['/profile'], { queryParams: { myProfile: true} });
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
      this.router.navigate(['/search'], { queryParams: { coverView: content, postSearch : true} });
    }
  }

  search(){
    this.router.navigate(['/search'], { queryParams: { coverView: 'search'} });
  }
}
