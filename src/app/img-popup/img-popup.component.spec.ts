import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPopupComponent } from './img-popup.component';

describe('ImgPopupComponent', () => {
  let component: ImgPopupComponent;
  let fixture: ComponentFixture<ImgPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgPopupComponent]
    });
    fixture = TestBed.createComponent(ImgPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
