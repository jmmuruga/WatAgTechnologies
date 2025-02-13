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
      'WatAg Technologies provides advanced water treatment systems for clean, safe, and sustainable water with expert filtration, purification, and treatment.'
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
