import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-title',
  templateUrl: './explore-title.component.html',
  styleUrls: ['./explore-title.component.scss']
})
export class ExploreTitleComponent {
  @Input("text") text = '';
}
