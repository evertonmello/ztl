import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


declare var Quill;
var Delta = Quill.import('delta');
declare var device;
declare var cordova;
declare var navigator;
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  pubPost = false;
  lastPage;
  selectedTab;
  postDraft;
  camera = false;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedTab = params.selectedTab || 0
      this.lastPage = params.lastPage || 'search'
    });
   }

  ngOnInit() {
    this.setUpTxtFormatRecorder()
  }

  setUpTxtFormatRecorder(){
    var toolbarOptions = [
      ['bold'],['italic'], ['underline'],[ 'strike'],  
      [ { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['image']
    ];
    this.postDraft = new Quill('#post', {
      modules: { toolbar: toolbarOptions },
      theme: 'snow'
    });
    this.postDraft.setContents(JSON.parse(window.localStorage.getItem("rascunho")));

    this.postDraft.on('text-change', ()=> {
        window.localStorage.setItem("rascunho", JSON.stringify(this.postDraft.getContents()))
    });

  }


  save(){

  }
  
  tglBtn(btn){
   return this[btn]
  }
  close(){
    this.router.navigate([this.lastPage], { queryParams: {
      profileId: 1,
      lastPage: this.lastPage,
      postSearch: true,
      selectedTab: this.selectedTab} 
   });
  }

  tglPrivacy(){
    this.pubPost = !this.pubPost;
  }




}
