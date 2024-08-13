import { Component } from '@angular/core';

@Component({
  selector: 'app-services-and-technology',
  templateUrl: './services-and-technology.component.html',
  styleUrls: ['./services-and-technology.component.css']
})
export class ServicesAndTechnologyComponent {

serviceImages1=['../../assets/Icons/icon-1-400x400.png','../../assets/Icons/icon-2-400x400.png','../../assets/Icons/icon-3-400x400.png','../../assets/Icons/icon-4w-400x400.png']
serviceImages2=['../../assets/Icons/icon-1b.png','../../assets/Icons/icon-2b.png','../../assets/Icons/icon-3b.png','../../assets/Icons/icon-4b.png']
ServicesOver(element:string,src:number){
  debugger;
  const img = document.getElementById(element) as HTMLImageElement;
  img.src = this.serviceImages1[src];
}
ServicesOut(element:string,src:number){
  debugger;
  const img = document.getElementById(element) as HTMLImageElement;
  img.src = this.serviceImages2[src];
}

}
