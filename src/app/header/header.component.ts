import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @ViewChild('header') myElement!: ElementRef;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 10) {
      this.myElement.nativeElement.classList.add('headerSize');
    } else {
      this.myElement.nativeElement.classList.remove('headerSize');
    }
  }

}
