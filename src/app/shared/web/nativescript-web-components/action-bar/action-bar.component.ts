import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ActionBar',
  templateUrl: 'action-bar.component.html',
  styleUrls: ['action-bar.component.scss']
})
export class ActionBarComponent {
  @Input() title: string;
}
