import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalConsultingServiceComponent } from './environmental-consulting-service.component';

describe('EnvironmentalConsultingServiceComponent', () => {
  let component: EnvironmentalConsultingServiceComponent;
  let fixture: ComponentFixture<EnvironmentalConsultingServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentalConsultingServiceComponent]
    });
    fixture = TestBed.createComponent(EnvironmentalConsultingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
