import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'Label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() text: string;
}
