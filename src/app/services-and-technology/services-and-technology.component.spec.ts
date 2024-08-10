import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndTechnologyComponent } from './services-and-technology.component';

describe('ServicesAndTechnologyComponent', () => {
  let component: ServicesAndTechnologyComponent;
  let fixture: ComponentFixture<ServicesAndTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesAndTechnologyComponent]
    });
    fixture = TestBed.createComponent(ServicesAndTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
