import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MetaService } from '../meta.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{
  @ViewChild('tableTop') tableTop!: ElementRef;
  constructor(
    private metaService: MetaService
  ) {}
  ngOnInit() {
    this.metaService.setMetaInfo(
      'Contact Us | WatAg technologies - Reach Out Today',
      'Have questions? Contact WatAg Technologies for wastewater treatment, solid waste management, and environmental solutions. Call or email us today!'
    );
    this.scrollToTableTop();
  }


  scrollToTableTop() {
    this.tableTop.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

}
