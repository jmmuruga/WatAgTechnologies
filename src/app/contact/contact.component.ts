import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @ViewChild('tableTop') tableTop!: ElementRef;

  ngOnInit() {
    debugger;
    this.scrollToTableTop();
  }

  scrollToTableTop() {
    debugger;
    this.tableTop.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
