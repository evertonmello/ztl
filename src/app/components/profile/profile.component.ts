import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  friendsFavs = [1,7,8,null];
  url = "./assets/img/bey.jpg"
  profileId;
  lasPage = 'home'
  cards = ['./assets/img/avengers.jpg','./assets/img/shazam.png','./assets/img/a_star.jpg','./assets/img/avatar3.jpg']
  selectedTab = 0
  myProfile = false;
  showMenu = false;
  invate = false;
  currentCard= 0;
  px = 0
  isMyFriend = false;
  @ViewChild('myPosts')myPosts :ElementRef
  constructor(private _sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute,
     private router:Router,private elem: ElementRef) {
    this.activatedRoute.queryParams.subscribe((params) =>{
      this.manageParams(params);
    })
   }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  manageParams(params){
    this.profileId = params.profileId
    this.lasPage = params.lastPage;
    this.selectedTab = params.selectedTab
    this.myProfile = params.myProfile || false;

    if(params.showEditMenu){
      this.showMenu = true;
      this.myProfile = true;
    }
  }

  

  setMenuView(){
    this.showMenu = !this.showMenu;
  }

  getBackground(image, friendsFav) {
    if( friendsFav ){
      return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.150) 50%,    
      rgba(0, 0, 0, 0.350) 70%,    
      rgba(0, 0, 0, 0.771) 95%,    
      rgba(0, 0, 0, 0.801) 100%), url(${image}) `);
    }
    return null;
  }

  goToSearch(){
    this.router.navigate(['search'], {queryParams: {coverView:'search'}})
  }

  backPage(){
    var page = this.myProfile || !this.lasPage ? 'home': this.lasPage = this.lasPage;
    this.router.navigate([page], { queryParams: { selectedTab: this.selectedTab} });
  }

  addNewFav(tab){
    this.router.navigate(['search'], {queryParams: {coverView:'fav', tab: tab}})
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
    this.myPosts.nativeElement.style.transition = "all 300ms";
    this.myPosts.nativeElement.style.transform = "translateX(" + this.px +"px)"


  }
}
