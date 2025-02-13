import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'products-and-spare-parts-supply',
  templateUrl: './products-and-spare-parts-supply.component.html',
  styleUrls: ['./products-and-spare-parts-supply.component.css']
})
export class ProductsAndSparePartsSupplyComponent implements OnInit{

constructor(private metaService: MetaService) {}

ngOnInit(): void {
  this.metaService.setMetaInfo(
    'Product & Spare Parts Supply | WatAg technologies',
    'WatAg Technologies provides quality products and spare parts for wastewater, sewage, solid waste management, and water treatment solutions.'
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
