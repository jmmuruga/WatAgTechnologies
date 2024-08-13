import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('header') myElement!: ElementRef;
  @HostListener('window:scroll', [])
  
  onScroll(): void {
    if (window.scrollY > 0) {
      this.myElement.nativeElement.classList.add('headerSize');
      // this.logo=this.alternateLogo;
      
    } else {
      this.myElement.nativeElement.classList.remove('headerSize');
      // this.logo='../../assets/Logo/logo.png';
    }
  }
// logo='../../assets/Logo/logo.png'
// alternateLogo='../../assets/Logo/logogreensolutionsindia-1-e1658147079576.png'
}
