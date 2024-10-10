import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-iot',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  // isShowBlockDiagram: boolean = false;
  // isShowDashboard: boolean = false;
  // isShowSignal: boolean = false;
  fullName : string = '';
  popup: boolean = false;
  zoomImg: any;
  imgId: any;
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
  PopUp(condition: boolean, value: any) {
    this.popup = condition;
    this.zoomImg = value;
  }
  moveSlides(value: any) {
    const currentIndex = this.galleryPhotos.findIndex(
      (photo) => photo.id === this.zoomImg.id
    );
    if (value == 'forward' && currentIndex + 1 < this.galleryPhotos.length) {
      this.zoomImg = this.galleryPhotos[currentIndex + 1];
    } else if (value == 'backward' && 0 < currentIndex) {
      this.zoomImg = this.galleryPhotos[currentIndex - 1];
    } else if (value == 'forward') {
      this.zoomImg = this.galleryPhotos[0];
    } else if (value == 'backward') {
      this.zoomImg = this.galleryPhotos[this.galleryPhotos.length - 1];
    } else {
      this.zoomImg = this.galleryPhotos[0];
    }
  }
  galleryPhotos: any[] = [
    { id: 1, src: '../../assets/Banner/gallery1.jpeg' },
    { id: 2, src: '../../assets/Banner/gallery2.jpeg' },
    { id: 3, src: '../../assets/Banner/gallery3.jpeg' },
    { id: 4, src: '../../assets/Banner/gallery4.jpeg' },
    { id: 5, src: '../../assets/Banner/gallery5.jpeg' },
    { id: 6, src: '../../assets/Banner/gallery6.jpeg' },
    { id: 7, src: '../../assets/Banner/gallery7.jpeg' },
    { id: 8, src: '../../assets/Banner/gallery8.jpeg' },
    { id: 9, src: '../../assets/Banner/gallery9.jpeg' },
    { id: 10, src: '../../assets/Banner/gallery10.jpeg' },
    { id: 11, src: '../../assets/Banner/gallery11.jpeg' },
    { id: 12, src: '../../assets/Banner/gallery12.jpeg' },
    { id: 13, src: '../../assets/Banner/gallery13.jpeg' },
    { id: 14, src: '../../assets/Banner/gallery14.jpeg' },
    { id: 15, src: '../../assets/Banner/gallery15.jpeg' },
    { id: 16, src: '../../assets/Banner/gallery16.jpeg' },
    { id: 17, src: '../../assets/Banner/gallery17.jpeg' },
    { id: 18, src: '../../assets/Banner/gallery18.jpeg' },
    { id: 19, src: '../../assets/Banner/gallery19.jpeg' },
    { id: 20, src: '../../assets/Banner/gallery20.jpeg' },
    { id: 21, src: '../../assets/Banner/gallery21.png' },
    { id: 22, src: '../../assets/Banner/gallery22.png' },
    { id: 23, src: '../../assets/Banner/gallery23.png' },
    { id: 24, src: '../../assets/Banner/gallery24.png' },
    { id: 25, src: '../../assets/Banner/gallery25.png' },
    
  ];

  messageForm = new FormGroup({
    to_name: new FormControl('Sir/Madam'),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    CompanyName: new FormControl(''),
    PhoneNumber: new FormControl('', [Validators.required]),
    EmailId: new FormControl('', [Validators.email,Validators.required]),
    Message: new FormControl('', [Validators.required]),
  });
  
  
  async send() {
    this.fullName = this.messageForm.value?.FirstName || '' + this.messageForm.value?.LastName || '';
    emailjs.init('csN6k99_P17n1XR6h');
    let response = await emailjs.send("service_yo6s73m","template_7cx6ryi",{
      from_name:this.fullName,
      to_name: "WatAg Technologies",
      mailId: this.messageForm.value.EmailId,
      phone_number:  this.messageForm.value.PhoneNumber,
      message: this.messageForm.value.Message,
      });
    if (response.status == 200 && response.text == 'OK') {
      this.messageForm.reset();
    }
  }
  
  async onSubmit() {
    debugger
    if (this.messageForm.valid) {
      await this.send();
      alert('form Submitted');
    } else {
      this.messageForm.markAllAsTouched();
    }
  }

}
