import { Component, OnInit } from '@angular/core';
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
  lasPage = ''
  selectedTab = 0
  myProfile = false;
  showMenu = false;
  constructor(private _sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe((params) =>{
      this.profileId = params.profileId
      this.lasPage = params.lastPage;
      this.selectedTab = params.selectedTab
      this.myProfile = params.myProfile || false;
    })
   }

  ngOnInit() {
    window.scrollTo(0, 0)
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
    var page = this.myProfile? 'home': this.lasPage
    this.router.navigate([page], { queryParams: { selectedTab: this.selectedTab} });
  }

  addNewFav(tab){
    this.router.navigate(['search'], {queryParams: {coverView:'fav', tab: tab}})
  } 
}
