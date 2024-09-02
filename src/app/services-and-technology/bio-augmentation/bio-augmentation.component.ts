import { Component } from '@angular/core';

@Component({
  selector: 'app-bio-augmentation',
  templateUrl: './bio-augmentation.component.html',
  styleUrls: ['./bio-augmentation.component.css']
})
export class BioAugmentationComponent {
  scrollToTableTop(scrlId: any) {
    const element = document.getElementById(scrlId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
}
}
