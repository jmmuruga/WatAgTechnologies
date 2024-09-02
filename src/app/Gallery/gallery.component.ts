import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  // isShowBlockDiagram: boolean = false;
  // isShowDashboard: boolean = false;
  // isShowSignal: boolean = false;
  popup: boolean = false;
  ngOnInit(): void {
    // this.openTab(1);
  }
  // openTab(id: Number) {
  //   if (id == 1) {
  //     this.isShowBlockDiagram = true;
  //     this.isShowDashboard = false;
  //     this.isShowSignal = false;
  //   } else if (id == 2) {
  //     this.isShowBlockDiagram = false;
  //     this.isShowDashboard = false;
  //     this.isShowSignal = true;
  //   } else if (id == 3) {
  //     this.isShowBlockDiagram = false;
  //     this.isShowDashboard = true;
  //     this.isShowSignal = false;
  //   }
  // }
  scrollToTableTop(scrlId: any) {
    const element = document.getElementById(scrlId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  PopUp(condition: any, src: string) {
    debugger;
    this.popup = condition;
    setTimeout(() => {
      const imgElement = document.getElementById(
        'ZoomInImg'
      ) as HTMLImageElement | null;
      if (imgElement) {
        imgElement.src = src;
      }
    }, 0);
  }
  galleryPhotos: any[] = [
    '../../assets/Banner/gallery1.jpeg',
    '../../assets/Banner/gallery2.jpeg',
    '../../assets/Banner/gallery3.jpeg',
    '../../assets/Banner/gallery4.jpeg',
    '../../assets/Banner/gallery5.jpeg',
    '../../assets/Banner/gallery6.jpeg',
    '../../assets/Banner/gallery7.jpeg',
    '../../assets/Banner/gallery8.jpeg',
    '../../assets/Banner/gallery9.jpeg',
  ];
}
