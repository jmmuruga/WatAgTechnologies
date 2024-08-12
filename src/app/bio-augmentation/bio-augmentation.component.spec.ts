import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAugmentationComponent } from './bio-augmentation.component';

describe('BioAugmentationComponent', () => {
  let component: BioAugmentationComponent;
  let fixture: ComponentFixture<BioAugmentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioAugmentationComponent]
    });
    fixture = TestBed.createComponent(BioAugmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
