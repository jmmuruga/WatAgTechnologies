import { Component } from '@angular/core';

@Component({
  selector: 'app-waste-water-and-sewage',
  templateUrl: './waste-water-and-sewage.component.html',
  styleUrls: ['./waste-water-and-sewage.component.css']
})
export class WasteWaterAndSewageComponent {
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
