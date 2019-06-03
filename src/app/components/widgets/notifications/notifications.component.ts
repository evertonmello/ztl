import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifcs = 23;
  ntfcations = ['as','acdas','dassda','acdas']
  @Output()evtShowNtfPrev = new EventEmitter();
  @Input()showPreview = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  tglPreview(){
    this.showPreview = !this.showPreview;
    this.evtShowNtfPrev.emit(this.showPreview)
  }

  openAllNotfc(){
    this.router.navigate(['notifications'],{})
  }

}
