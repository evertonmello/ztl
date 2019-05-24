import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  friendsFavs = [1,2,3,4,5,6,7,8];
  url = "./assets/img/bey.jpg"
  profileId;
  lasPage = ''
  selectedTab = 0
  constructor(private _sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe((params) =>{
      console.log(params.selectedTab)
      this.profileId = params.profileId
      this.lasPage = params.lastPage;
      this.selectedTab = params.selectedTab
    })
   }

  ngOnInit() {
    window.scrollTo(0, 0)

  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.150) 50%,    
    rgba(0, 0, 0, 0.350) 70%,    
    rgba(0, 0, 0, 0.771) 95%,    
    rgba(0, 0, 0, 0.801) 100%), url(${image}) `);
  }

  backPage(){
    this.router.navigateByUrl(this.lasPage)
    this.router.navigate([this.lasPage], { queryParams: { selectedTab: this.selectedTab} });

  }
}
