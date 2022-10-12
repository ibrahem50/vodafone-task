import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [MatSelectModule, MatMenuModule, MatIconModule, MatDialogModule],
})
export class AngularMaterialModule {}
