import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormOneComponent } from './contact-form-one.component';

describe('ContactFormOneComponent', () => {
  let component: ContactFormOneComponent;
  let fixture: ComponentFixture<ContactFormOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormOneComponent]
    });
    fixture = TestBed.createComponent(ContactFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
