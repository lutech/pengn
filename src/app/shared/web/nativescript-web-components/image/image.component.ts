import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'Image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.scss']
})
export class ImageComponent implements OnChanges {
  @Input() src: string;
  public imgSrc: string;

  ngOnChanges() {
    if (this.src) {
      if (this.src.indexOf('~') === 0) {
        // local file  
        this.imgSrc = this.src.replace('~/', '');
      } else {
        this.imgSrc = this.src;
      }
    }
  }
}
