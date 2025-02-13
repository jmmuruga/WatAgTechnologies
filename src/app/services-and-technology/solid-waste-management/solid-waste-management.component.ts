import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-solid-waste-management',
  templateUrl: './solid-waste-management.component.html',
  styleUrls: ['./solid-waste-management.component.css']
})
export class SolidWasteManagementComponent implements OnInit{

constructor(private metaService: MetaService) {}

ngOnInit(): void {
  this.metaService.setMetaInfo(
    'Solid Waste Management | WatAg technologies',
    'WatAg Technologies offers solid waste management solutions, including collection, recycling, disposal, and sustainable waste treatment services.'
  );
}

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
