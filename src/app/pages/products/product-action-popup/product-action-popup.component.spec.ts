import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActionPopupComponent } from './product-action-popup.component';

describe('ProductActionPopupComponent', () => {
  let component: ProductActionPopupComponent;
  let fixture: ComponentFixture<ProductActionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductActionPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductActionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
