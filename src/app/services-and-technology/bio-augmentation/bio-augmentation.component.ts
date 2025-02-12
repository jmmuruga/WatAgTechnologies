import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-bio-augmentation',
  templateUrl: './bio-augmentation.component.html',
  styleUrls: ['./bio-augmentation.component.css']
})
export class BioAugmentationComponent implements OnInit{

constructor(private metaService: MetaService) {}

ngOnInit(): void {
  this.metaService.setMetaInfo(
    'Product & Spare Parts Supply | WatAg technologies',
    'WatAg technologies supplies high-quality products and spare parts for wastewater treatment, sewage systems, solid waste management, and water treatment solutions.'
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
