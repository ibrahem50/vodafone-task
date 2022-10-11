import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSelectModule, MatMenuModule, MatIconModule],
  exports: [MatSelectModule, MatMenuModule, MatIconModule],
})
export class AngularMaterialModule {}
