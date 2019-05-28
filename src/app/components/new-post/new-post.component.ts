import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
declare var Quill;
var Delta = Quill.import('delta');

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

/*   bold = false;
  italic = false;
  underline = false;
  strikeThrough = false;
  left = false;
  center = false;
  right = false;
  justify = false;
  insertUnorderedList = false;
  buttons = ['bold','italic','underline','strikeThrough','left','center','right','justify','insertUnorderedList','camera'] */
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
      [{ 'align': [] }]
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
