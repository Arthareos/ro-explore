import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-text',
  templateUrl: './explore-text.component.html',
  styleUrls: ['./explore-text.component.scss'],
})
export class ExploreTextComponent {
  @Input("text") text = '';
}
