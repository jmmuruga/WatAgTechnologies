import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/meta.service';
@Component({
  selector: 'app-environmental-consulting-service',
  templateUrl: './environmental-consulting-service.component.html',
  styleUrls: ['./environmental-consulting-service.component.css'],
})
export class EnvironmentalConsultingServiceComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaInfo(
      'Environmental Consulting Services | WatAg technologies',
      'WatAg Technologies offers environmental consulting, sustainability planning, regulatory compliance, and eco-friendly waste management solutions.'
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
