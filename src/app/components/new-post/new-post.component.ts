import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera'

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
      ['image'],
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

  openGallery(){
    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = this.setOptions(srcType);
    var func = this.createNewFileEntry;
    var func2 = this.createFile
    var draft = this.postDraft;
    navigator.camera.getPicture(function cameraSuccess(imageUri) {

      func(imageUri, function (dirEntry) {
        func2(dirEntry, "temp.jpg", false, (fileEntry)=>{
          console.log(draft)
          console.log(fileEntry.nativeURL)
          //draft.insertEmbed(1, 'image', fileEntry.nativeURL);
        })
      })
    }, function cameraError(error) {
      console.debug("Unable to obtain picture: " + error, "app");

    }, options);
  }

  createNewFileEntry(imgUri, callback) {
    var resolvFunc = window['resolveLocalFileSystemURL'];
    resolvFunc(cordova.file.cacheDirectory, function success(dirEntry) {
      callback(dirEntry);
    }, null);
  }
  createFile(dirEntry, fileName, isAppend, callback) {
    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
      callback(fileEntry)
    }, null);
  }


  setOptions(srcType) {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: srcType,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
  }

}
