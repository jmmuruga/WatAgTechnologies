import { Component } from '@angular/core';

@Component({
  selector: 'app-environmental-consulting-service',
  templateUrl: './environmental-consulting-service.component.html',
  styleUrls: ['./environmental-consulting-service.component.css']
})
export class EnvironmentalConsultingServiceComponent {
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
