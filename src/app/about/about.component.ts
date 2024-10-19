import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  projectCounts: number = 0;
  clientCounts: number = 0;
  yearCounts: number = 0;
  intervalId: any;

  ngOnInit(): void {}
  @ViewChild('Experience') exp!: ElementRef;

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkIfDivInView();
  }

  checkIfDivInView(): void {
    const rect = this.exp.nativeElement.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Check if the div is in the viewport
    if (rect.top >= 0 && rect.bottom <= viewHeight) {
      console.log('Div is fully in view!');
      this.intervalId = setInterval(() => {
        this.animateCounter();
      }, 80);
    }
    //else if (rect.top < viewHeight && rect.bottom >= 0) {
    //   console.log('Div is partially in view!');
    //   this.onDivVisible();
    // }
  }
  animateCounter(): void {
    // Stop the interval when counts reach 100
    if (this.projectCounts < 63) {
      this.projectCounts++;
    }
    if (this.clientCounts < 30) {
      this.clientCounts++;
    }
    if (this.yearCounts < 2) {
      this.yearCounts++;
    }
    if (this.projectCounts > 63) {
      clearInterval(this.intervalId);
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
  }
}
