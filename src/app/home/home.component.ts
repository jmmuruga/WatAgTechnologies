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
  carousel: any;
  firstImg: any;
  firstImgWidth: any;
  on: any;
  @ViewChild('scrollElement', { static: true }) scrollElement!: ElementRef;

  ngOnInit() {
    this.scrollid = localStorage.getItem('scrlid');
    if (this.scrollid) {
      setTimeout(() => this.scrollToTableTop(this.scrollid), 0);
    }
    this.on = setInterval(() => {
      this.NextSlides(-372);
    }, 2000);
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
    } else {
      this.myElement.nativeElement.classList.remove('headerSize');
    }
  }
  OurClients() {
    this.scrollToTableTop('OurClients');
  }
  slideLen: number = -2600;
  NextSlides(num: number) {
    debugger;
    this.PlusSlides((this.slideLen += num));
  }
  PlusSlides(x: number) {
    debugger;
    this.carousel = document.getElementById('Carousel');
    if ((x < 0 && x < -4600) || x > 0) {
      this.carousel.style.transform = 'translate3d(-2600px,0px,0px)';
      this.slideLen = -2600;
    } else {
      this.carousel.style.transform = `translate3d(${x}px,0px,0px)`;
    }
  }
  clearInterval() {
    clearInterval(this.on);
  }
}
