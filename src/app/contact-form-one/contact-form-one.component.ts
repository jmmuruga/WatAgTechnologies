import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact-form-one',
  templateUrl: './contact-form-one.component.html',
  styleUrls: ['./contact-form-one.component.css']
})
export class ContactFormOneComponent {
  fullName : string = '';

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
    if (this.messageForm.valid) {
      await this.send();
      alert('form Submitted');
    } else {
      this.messageForm.markAllAsTouched();
    }
  }

}
