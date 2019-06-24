import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

declare var Quill;

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  
  postDraft;
  profile = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    nickName: new FormControl('', [Validators.required]),
  });
  constructor(private router:Router) { }

  ngOnInit() {
    this.setUpTxtFormatRecorder();
  }

  onSubmit(){

  }

  showDate(){
  }

  setUpTxtFormatRecorder(){
    var toolbarOptions = [['image']];
    this.postDraft = new Quill('#post', {
      modules: { toolbar: toolbarOptions },
      theme: 'snow'
    });
    this.postDraft.setContents(JSON.parse(window.localStorage.getItem("rascunho")));

    this.postDraft.on('text-change', ()=> {
        window.localStorage.setItem("rascunho", JSON.stringify(this.postDraft.getContents()))
    });

  }

  close(){
    this.router.navigate(['/profile'], { queryParams:{showEditMenu: true}})
  }
}
