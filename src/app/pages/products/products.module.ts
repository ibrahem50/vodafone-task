import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsPopupComponent } from './product-details-popup/product-details-popup.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent, CategoriesComponent, ProductCardComponent, ProductDetailsPopupComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductsModule {}
