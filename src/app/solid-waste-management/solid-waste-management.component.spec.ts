import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidWasteManagementComponent } from './solid-waste-management.component';

describe('SolidWasteManagementComponent', () => {
  let component: SolidWasteManagementComponent;
  let fixture: ComponentFixture<SolidWasteManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolidWasteManagementComponent]
    });
    fixture = TestBed.createComponent(SolidWasteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
