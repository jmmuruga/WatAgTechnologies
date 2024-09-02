import { Component } from '@angular/core';

@Component({
  selector: 'app-solid-waste-management',
  templateUrl: './solid-waste-management.component.html',
  styleUrls: ['./solid-waste-management.component.css']
})
export class SolidWasteManagementComponent {
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
