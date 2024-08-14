import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  scrollid: string | null = null;
  arrowIcons = document.querySelectorAll('.wrapper a');

  @ViewChild('scrollElement', { static: true }) scrollElement!: ElementRef;

  ngOnInit() {
    this.scrollid = localStorage.getItem('scrlid');
    if (this.scrollid) {
      setTimeout(() => this.scrollToTableTop(this.scrollid), 0);
    }
  }

  scrollToTableTop(scrlId: any) {
    const element = document.getElementById(scrlId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    localStorage.removeItem('scrlid');
  }

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
  OurClients() {
    this.scrollToTableTop('OurClients');
  }
  nextSlides() {
    document.getElementById('slides')!.style.marginRight = '';
  }
  carousel = document.querySelector('.carousel');
  firstImg = this.carousel?.querySelectorAll('img')[0];

  firstImgWidth = this.firstImg!.clientWidth + 14;

  modificationOfSlides() {
    this.arrowIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        this.carousel!.scrollLeft +=
          icon.id == 'left' ? -this.firstImgWidth : this.firstImgWidth;
      });
    });
  }
  
}
