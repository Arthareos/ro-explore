import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-page-landing',
  templateUrl: './explore-page-landing.component.html',
  styleUrls: ['./explore-page-landing.component.scss']
})
export class ExplorePageLandingComponent implements OnInit {
  title = 'explore-ui';

  constructor(public router: Router) {}

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
