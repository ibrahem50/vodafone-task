import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductActionPopupComponent } from '../product-action-popup/product-action-popup.component';
import { ProductModel } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {
  @Input('products') products: ProductModel[] = [];
  displayedColumns: string[] = [
    'id',
    'image',
    'title',
    'category',
    'price',
    'actions',
  ];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  add() {
    this.dialog
      .open(ProductActionPopupComponent, {
        data: {
          products: this.products,
          edit: false,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          res = res.map((res: ProductModel[]) => res);
          this.productService.products$.next(res);
        }
      });
  }

  edit(product: ProductModel) {
    this.dialog
      .open(ProductActionPopupComponent, {
        data: {
          product: product,
          products: this.products,
          edit: true,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          res = res.map((res: ProductModel[]) => res);
          this.productService.products$.next(res);
        }
      });
  }

  delete(product: ProductModel) {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.productService.deleteProduct(product.id).subscribe((res) => {
            this.products = this.products.filter(
              (product) => product.id != res.id
            );
            this.productService.products$.next(this.products);
          });
        }
      });
  }
}
