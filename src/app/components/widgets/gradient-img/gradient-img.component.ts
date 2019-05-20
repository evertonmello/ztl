import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'gradient-img',
  templateUrl: './gradient-img.component.html',
  styleUrls: ['./gradient-img.component.scss']
})
export class GradientImgComponent implements OnInit {

  @Input()url = '../../../assets/img/bey.jpg';
  constructor() { }

  ngOnInit() {
    console.log(this.url)
  }


}


