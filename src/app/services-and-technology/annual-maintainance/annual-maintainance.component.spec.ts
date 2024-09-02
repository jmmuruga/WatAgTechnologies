import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMaintainanceComponent } from './annual-maintainance.component';

describe('AnnualMaintainanceComponent', () => {
  let component: AnnualMaintainanceComponent;
  let fixture: ComponentFixture<AnnualMaintainanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualMaintainanceComponent]
    });
    fixture = TestBed.createComponent(AnnualMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
