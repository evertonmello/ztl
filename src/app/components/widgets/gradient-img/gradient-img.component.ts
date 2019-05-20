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

  setMyStyle(){
    let style = {
      
      'background-color':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.150) 50%,rgba(0, 0, 0, 0.350) 70%,rgba(0, 0, 0, 0.771) 95%, rgba(0, 0, 0, 0.801) 100%), url(' + this.url +') no-repeat',
      'background-size': '98px',
      'height': '95px',
      'width': '95px',
      'border-radius': '5px',
      'margin-right': '8px'
    }
    return style;
  }
}


