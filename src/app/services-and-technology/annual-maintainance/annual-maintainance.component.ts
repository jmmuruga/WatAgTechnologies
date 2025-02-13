import { Component } from '@angular/core';
import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-annual-maintainance',
  templateUrl: './annual-maintainance.component.html',
  styleUrls: ['./annual-maintainance.component.css']
})
export class AnnualMaintainanceComponent {

constructor(private metaService: MetaService) {}

ngOnInit(): void {
  this.metaService.setMetaInfo(
    'Annual Maintenance Services | WatAg technologies',
    'Annual Maintenance Services offers reliable upkeep for wastewater treatment, sewage systems, solid waste management, and water treatment solutions.'
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
