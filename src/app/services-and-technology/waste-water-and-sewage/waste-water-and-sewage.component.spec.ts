import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteWaterAndSewageComponent } from './waste-water-and-sewage.component';

describe('WasteWaterAndSewageComponent', () => {
  let component: WasteWaterAndSewageComponent;
  let fixture: ComponentFixture<WasteWaterAndSewageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteWaterAndSewageComponent]
    });
    fixture = TestBed.createComponent(WasteWaterAndSewageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
