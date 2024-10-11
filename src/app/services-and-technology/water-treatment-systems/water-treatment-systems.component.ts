import { Component } from '@angular/core';@Component({
  selector: 'app-water-treatment-systems',
  templateUrl: './water-treatment-systems.component.html',
  styleUrls: ['./water-treatment-systems.component.css']
})
export class WaterTreatmentSystemsComponent {
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
