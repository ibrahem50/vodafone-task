import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LoadingInterceptor } from './loading.interceprot';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  imports: [HttpClientModule],
  exports: [HttpClientModule],
})
export class CoreModule {}
