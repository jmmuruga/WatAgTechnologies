import { Component, OnInit } from '@angular/core';import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-water-treatment-systems',
  templateUrl: './water-treatment-systems.component.html',
  styleUrls: ['./water-treatment-systems.component.css']
})
export class WaterTreatmentSystemsComponent implements OnInit{

constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaInfo(
      'Water Treatment Systems | WatAg technologies',
      'WatAg technologies offers advanced water treatment systems for clean, safe, and sustainable water solutions. Expert filtration, purification, and treatment services.'
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
