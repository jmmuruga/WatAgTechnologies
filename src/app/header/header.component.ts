import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  isOpenBtn:boolean=true;
  @ViewChild('header') myElement!: ElementRef;
  @HostListener('window:scroll', [])
  headerShadow: boolean = false;
  isCheck:boolean=false;
  onScroll(): void {
    if (window.scrollY > 30) {
      this.myElement.nativeElement.classList.add('headerSize');
      this.headerShadow = true;
      // this.logo=this.alternateLogo;
    } else {
      this.myElement.nativeElement.classList.remove('headerSize');
      this.headerShadow = false;
      // this.logo='../../assets/Logo/logo.png';
    }
  }
  // logo='../../assets/Logo/logo.png'
  // alternateLogo='../../assets/Logo/logogreensolutionsindia-1-e1658147079576.png'
  OurClients() {
    localStorage.setItem('scrlid', 'OurClients');
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
