import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'explore-ui';

  ngOnInit(): void {
    var video = document.querySelector('video');
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.play();
    }
  }
}
