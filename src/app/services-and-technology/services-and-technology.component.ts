import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
@Component({
  selector: 'app-services-and-technology',
  templateUrl: './services-and-technology.component.html',
  styleUrls: ['./services-and-technology.component.css'],
})
export class ServicesAndTechnologyComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaInfo(
      'Services | WatAg Technologies - Waste & Water Solutions',
      'Explore our services in wastewater treatment, sewage, solid waste management, water treatment, spare parts supply, and environmental consulting.'
    );
  }

  serviceImages1 = [
    '../../assets/Icons/icon-1-400x400.png',
    '../../assets/Icons/icon-2-400x400.png',
    '../../assets/Icons/icon-3-400x400.png',
    '../../assets/Icons/icon-4w-400x400.png',
    '../../assets/Icons/icon-4w-400x400.png',
    '../../assets/Icons/icon-4w-400x400.png',
  ];
  serviceImages2 = [
    '../../assets/Icons/icon-1b.png',
    '../../assets/Icons/icon-2b.png',
    '../../assets/Icons/icon-3b.png',
    '../../assets/Icons/icon-4b.png',
    '../../assets/Icons/icon-4b.png',
    '../../assets/Icons/icon-4b.png',
  ];
  ServicesOver(element: string, src: number) {
    const img = document.getElementById(element) as HTMLImageElement;
    img.src = this.serviceImages1[src];
  }
  ServicesOut(element: string, src: number) {
    const img = document.getElementById(element) as HTMLImageElement;
    img.src = this.serviceImages2[src];
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
  services = [
    {
      id: 1,
      src: '../../assets/Icons/waterandsewage.png',
      name: 'Waste Water and Sewage Treatment Systems',
      link: '/wastewater-and-sewage-treatment-watag-technologies',
    },
    {
      id: 2,
      src: '../../assets/Icons/waterTreatmentProcess-removebg-preview (1).png',
      name: 'Water Treatment Systems',
      link: '/water-treatment-systems-solutions-watag-technologies',
    },
    {
      id: 3,
      src: '../../assets/Icons/wasteManagement.png',
      name: 'Solid Waste Management Systems',
      link: '/solid-waste-management-solutions-watag-technologies',
    },
    {
      id: 4,
      src: '../../assets/Icons/spareparts.png',
      name: 'Product and Spare Parts Supply',
      link: '/product-and-spare-parts-supply-solutions-watag-technologies',
    },
    {
      id: 5,
      src: '../../assets/Icons/environmental-removebg-preview.png',
      name: 'Environmental Consulting Service',
      link: '/environmental-consulting-solutions-watag-technologies',
    },
    {
      id: 6,
      src: '../../assets/Icons/serviceMaintainance-removebg-preview.png',
      name: 'Annual Maintainance',
      link: '/annual-maintenance-wastewater-sewage-watag-technologies',
    },
  ];
}
