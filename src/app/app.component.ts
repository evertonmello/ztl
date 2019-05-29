import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { slide  } from './animations';

import { Camera, CameraOptions } from '@ionic-native/camera'

declare var device; 
declare var cordova; 
declare var navigator;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide
    
  ]
})

export class AppComponent {
  title = 'app';
  url = './assets/img/avatar1.jpg'
  ngOnInit(){

    setTimeout(() => {
        var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
       var options = this.setOptions(srcType);
       var func = this.createNewFileEntry;
        var func2 = this.createFile
        var xpto = this.url;
        navigator.camera.getPicture(function cameraSuccess(imageUri) {
    
        document.getElementById('img').setAttribute( 'src', imageUri );
        func(imageUri, function(dirEntry){
          func2(dirEntry,"temp.jpg",false)
        })
      }, function cameraError(error) {
          console.debug("Unable to obtain picture: " + error, "app");
  
      }, options);  
    }, 3000);

}


  createNewFileEntry(imgUri,callback) {
      var resolvFunc = window['resolveLocalFileSystemURL'];
      resolvFunc(cordova.file.cacheDirectory, function success(dirEntry) {
      // JPEG file
      //  func(dirEntry,"temp.jpg",false)
      callback(dirEntry);
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
 
  prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  createFile(dirEntry, fileName, isAppend) {
    // Creates a new file or returns the file if it already exists.
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
  
      console.log(fileEntry)
    }, null);
  
  }
}
