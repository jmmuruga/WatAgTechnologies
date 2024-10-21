import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
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
  isOpenBtn: boolean = true;
  isCheck: boolean = false;
  images: HTMLImageElement[] = [];
  imageWidth: number = 0;
  index: number = 0;
  slideInterval: any;
  repeatArray = Array(4);
  containerWidth: number = 0;
  zoomedInImage: any = null;
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('scrollElement', { static: true }) scrollElement!: ElementRef;
  @ViewChild('header') myElement!: ElementRef;
  @ViewChild('slideImages') slideImages!: ElementRef;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 30) {
      this.myElement.nativeElement.classList.add('headerSize');
    } else {
      this.myElement.nativeElement.classList.remove('headerSize');
    }
  }
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.initializeSlider();
    this.scrollid = localStorage.getItem('scrlid');
    if (this.scrollid) {
      setTimeout(() => this.scrollToTableTop(this.scrollid), 0);
    }
  }
  ngAfterViewInit() {
    this.containerWidth =
      (document.querySelector('#Carousel') as HTMLElement)?.offsetWidth || 0;
    this.initializeSlider();
  }
  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
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

  OurClients() {
    this.scrollToTableTop('OurClients');
  }

  clearInterval() {
    clearInterval(this.slideInterval);
  }
  imageList: any[] = [
    { id: 1, src: '../../assets/Logo/logo1.jpg' },
    { id: 2, src: '../../assets/Logo/logo2.jpg' },
    { id: 3, src: '../../assets/Logo/logo3.jpg' },
    { id: 4, src: '../../assets/Logo/logo4.jpg' },
    { id: 5, src: '../../assets/Logo/logo5.jpg' },
    { id: 6, src: '../../assets/Logo/logo6.jpg' },
    { id: 7, src: '../../assets/Logo/logo7.jpg' },
    { id: 8, src: '../../assets/Logo/logo8.jpg' },
    { id: 9, src: '../../assets/Logo/logo9.jpg' },
    { id: 10, src: '../../assets/Logo/logo10.jpg' },
    { id: 11, src: '../../assets/Logo/logo11.jpg' },
    { id: 12, src: '../../assets/Logo/logo12.jpg' },
    { id: 13, src: '../../assets/Logo/logo13.jpg' },
    { id: 14, src: '../../assets/Logo/logo14.jpg' },
  ];

  services = [
    {
      id: 1,
      src: '../../assets/Icons/waterandsewage.png',
      name: 'Waste Water and Sewage Treatment Systems',
      link: '/servicesandtechnology/wastewaterandsewage',
    },
    {
      id: 2,
      src: '../../assets/Icons/waterTreatmentProcess-removebg-preview (1).png',
      name: 'Water Treatment Systems',
      link: '/servicesandtechnology/watertreatmentsystems',
    },
    {
      id: 3,
      src: '../../assets/Icons/wasteManagement.png',
      name: 'Solid Waste Management Systems',
      link: '/servicesandtechnology/solidwastemanagement',
    },
    {
      id: 4,
      src: '../../assets/Icons/spareparts.png',
      name: 'Product and Spare Parts Supply',
      link: '/servicesandtechnology/bioaugmentation',
    },
    {
      id: 5,
      src: '../../assets/Icons/environmental-removebg-preview.png',
      name: 'Environmental Consulting Service',
      link: '/servicesandtechnology/environmentalconsultingservice',
    },
    {
      id: 6,
      src: '../../assets/Icons/serviceMaintainance-removebg-preview.png',
      name: 'Annual Maintainance',
      link: '/servicesandtechnology/annualmaintainancecomponent',
    },
  ];

  resetZoom() {
    if (this.zoomedInImage) {
      this.zoomedInImage.style.opacity = '0.5';
      this.zoomedInImage.style.transition = 'transform 0.5s ease';
      this.zoomedInImage.style.transform = 'scale(1)';
      this.zoomedInImage = null;
    }
  }

  initializeSlider() {
    const sliderElement = this.slider.nativeElement;
    this.images = [
      ...sliderElement.querySelectorAll('.img'),
    ] as HTMLImageElement[];

    if (this.images.length > 0) {
      this.imageWidth = this.images[0].clientWidth;
      sliderElement.style.transform = `translateX(-${
        this.index * this.imageWidth
      }px)`;

      this.slideInterval = setInterval(() => this.slideImages1('-'), 2000);
    }
  }

  slideImages1(value: any) {
    this.index++;
    const sliderElement = this.slider.nativeElement;
    sliderElement.style.transition = 'transform 0.5s linear';
    sliderElement.style.transform = `translateX(${value}${this.index * 300}px)`;

    if (this.index >= this.images.length / 2) {
      setTimeout(() => {
        sliderElement.style.transition = 'none';
        this.index = 0;
        sliderElement.style.transform = `translateX(-${this.index * 300}px)`;
      }, 500);
    }
  }
  next() {
    this.slideImages1('-');
  }
  Prev() {
    if (this.index > 0) {
      this.index--;
      const sliderElement = this.slider.nativeElement;
      sliderElement.style.transition = 'transform 0.5s linear';
      sliderElement.style.transform = `translateX(-${this.index * 300}px)`;
    } else {
      this.index = this.images.length / 2 - 1;
      const sliderElement = this.slider.nativeElement;
      sliderElement.style.transition = 'none';
      sliderElement.style.transform = `translateX(-${this.index * 300}px)`;
      setTimeout(() => {
        sliderElement.style.transition = 'transform 0.5s linear';
        this.index--;
        sliderElement.style.transform = `translateX(-${this.index * 300}px)`;
      }, 0);
    }
  }
}
