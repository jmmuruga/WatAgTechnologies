import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormTwoComponent } from './contact-form-two.component';

describe('ContactFormTwoComponent', () => {
  let component: ContactFormTwoComponent;
  let fixture: ComponentFixture<ContactFormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormTwoComponent]
    });
    fixture = TestBed.createComponent(ContactFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
