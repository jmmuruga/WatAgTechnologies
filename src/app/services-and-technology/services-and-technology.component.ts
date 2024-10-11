import { Component } from '@angular/core';
@Component({
  selector: 'app-services-and-technology',
  templateUrl: './services-and-technology.component.html',
  styleUrls: ['./services-and-technology.component.css']
})
export class ServicesAndTechnologyComponent {
serviceImages1=['../../assets/Icons/icon-1-400x400.png','../../assets/Icons/icon-2-400x400.png','../../assets/Icons/icon-3-400x400.png','../../assets/Icons/icon-4w-400x400.png','../../assets/Icons/icon-4w-400x400.png','../../assets/Icons/icon-4w-400x400.png']
serviceImages2=['../../assets/Icons/icon-1b.png','../../assets/Icons/icon-2b.png','../../assets/Icons/icon-3b.png','../../assets/Icons/icon-4b.png','../../assets/Icons/icon-4b.png','../../assets/Icons/icon-4b.png']
ServicesOver(element:string,src:number){
  const img = document.getElementById(element) as HTMLImageElement;
  img.src = this.serviceImages1[src];
}
ServicesOut(element:string,src:number){
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
  {id:1,src:'../../assets/Icons/waterandsewage.png',name:'Waste Water and Sewage Treatment Systems', link:'/servicesandtechnology/wastewaterandsewage'},
  {id:2,src:'../../assets/Icons/waterTreatmentProcess-removebg-preview (1).png',name:'Water Treatment Systems', link:'/servicesandtechnology/watertreatmentsystems'},
  {id:3,src:'../../assets/Icons/wasteManagement.png',name:'Solid Waste Management Systems', link:'/servicesandtechnology/solidwastemanagement'},
  {id:4,src:'../../assets/Icons/spareparts.png',name:'Product and Spare Parts Supply', link:'/servicesandtechnology/bioaugmentation'},
  {id:5,src:'../../assets/Icons/environmental-removebg-preview.png',name:'Environmental Consulting Service', link:'/servicesandtechnology/environmentalconsultingservice'},
  {id:6,src:'../../assets/Icons/serviceMaintainance-removebg-preview.png',name:'Annual Maintainance', link:'/servicesandtechnology/annualmaintainancecomponent'},
]

}