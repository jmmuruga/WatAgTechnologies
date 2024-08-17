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
  autoSlide: any;
  @ViewChild('scrollElement', { static: true }) scrollElement!: ElementRef;

  ngOnInit() {
    this.scrollid = localStorage.getItem('scrlid');
    if (this.scrollid) {
      setTimeout(() => this.scrollToTableTop(this.scrollid), 0);
    }
    this.autoSlide = setInterval( () => {
      this.NextSlides(-372);
    }, 5000);
    setInterval(()=>{this.trackCenterImage()}, 1000); 
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
    clearInterval(this.autoSlide);
  }
  imageList: any[] = [
    { id: 1, src: '../../assets/Logo/logo-1.jpg' },
    { id: 2, src: '../../assets/Logo/logo-4.jpg' },
    { id: 3, src: '../../assets/Logo/logo-5.jpg' },
    { id: 4, src: '../../assets/Logo/logo-9.jpg' },
  ];

  repeatArray = Array(4);



  
  images:any = document.querySelectorAll('.slideImages');
  containerWidth:number = (document.querySelector('#Carousel') as HTMLElement)?.offsetWidth || 0;
  // Function to find the image in the center
   trackCenterImage() {
    debugger
    const centerPosition = this.containerWidth / 2;
    this.images.forEach((img:any) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenter = imgRect.left + imgRect.width / 2;
      // Check if image center is closest to the container center
      if (Math.abs(imgCenter - centerPosition) < imgRect.width / 2) {
        img.style.transform="scale(2)"
      } else {
         img.style.transform="scale(2)"
      }
    });
  }













}
