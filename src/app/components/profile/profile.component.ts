import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileId;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) =>{
      console.log(params)

      this.profileId = params.profileId
    })
   }

  ngOnInit() {
    console.log(this.profileId)
  }

}
