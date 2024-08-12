import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTreatmentSystemsComponent } from './water-treatment-systems.component';

describe('WaterTreatmentSystemsComponent', () => {
  let component: WaterTreatmentSystemsComponent;
  let fixture: ComponentFixture<WaterTreatmentSystemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterTreatmentSystemsComponent]
    });
    fixture = TestBed.createComponent(WaterTreatmentSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
