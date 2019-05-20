import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url = "/../assets/img/bey.jpg"
  cards = [1,2,3,4,5,6]
  friendsFavs = [1,2,3,4,5,6]
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  getBackground(image) {
      return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.150) 50%,    
      rgba(0, 0, 0, 0.350) 70%,    
      rgba(0, 0, 0, 0.771) 95%,    
      rgba(0, 0, 0, 0.801) 100%), url(${image})`);
  }


}
