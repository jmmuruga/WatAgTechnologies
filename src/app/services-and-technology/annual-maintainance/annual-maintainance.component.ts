import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-maintainance',
  templateUrl: './annual-maintainance.component.html',
  styleUrls: ['./annual-maintainance.component.css']
})
export class AnnualMaintainanceComponent {
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
