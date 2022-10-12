import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsPopupComponent } from '../product-details-popup/product-details-popup.component';
import { ProductModel } from 'src/app/pages/products/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input('product')
  product!: ProductModel;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openProductDetails() {
    this.dialog.open(ProductDetailsPopupComponent, {
      panelClass: 'product-details-container',
      data: {
        productData: this.product,
      },
    });
  }
}
