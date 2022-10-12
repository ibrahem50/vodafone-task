import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [HeaderComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    DeleteDialogComponent,
  ],
})
export class SharedModule {}
