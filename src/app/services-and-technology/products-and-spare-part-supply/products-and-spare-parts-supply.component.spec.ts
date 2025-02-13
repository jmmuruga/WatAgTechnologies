import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndSparePartsSupplyComponent } from './products-and-spare-parts-supply.component';

describe('ProductsAndSparePartsSupplyComponent', () => {
  let component: ProductsAndSparePartsSupplyComponent;
  let fixture: ComponentFixture<ProductsAndSparePartsSupplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAndSparePartsSupplyComponent]
    });
    fixture = TestBed.createComponent(ProductsAndSparePartsSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
