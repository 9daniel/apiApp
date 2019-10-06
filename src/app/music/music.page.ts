import { Component, OnInit } from '@angular/core';
import {StreamingMedia, StreamingVideoOptions, StreamingAudioOptions} from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  constructor(private StreamingMedia: StreamingMedia) { }

  ngOnInit() {
  }


  startVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log ()},
      errorCallback: () => {console.log()},
      orientation: 'portrait'
    }

    this.StreamingMedia.playVideo('https://www.youtube.com/watch?v=TvnYmWpD_T8',options);
  }

  startAudio(){
    let options: StreamingVideoOptions = {
      successCallback: () => {console.log ()},
      errorCallback: () => {console.log()},
      //initFullscreen: false,
    }

    this.StreamingMedia.playAudio('https://youtu.be/TvnYmWpD_T8', options);
  }

  
  stopAudio(){
    this.StreamingMedia.stopAudio();
  }

}
