import { Component } from '@angular/core';import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-waste-water-and-sewage',
  templateUrl: './waste-water-and-sewage.component.html',
  styleUrls: ['./waste-water-and-sewage.component.css']
})
export class WasteWaterAndSewageComponent {

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaInfo(
      'Wastewater & Sewage Treatment | WatAg technologies',
      'WatAg technologies provides advanced wastewater and sewage treatment solutions, ensuring clean water, sustainability, and efficient waste management.'
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
