import {
  BrowserTransferStateModule,
  TransferState,
} from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LoadingInterceptor } from './loading.interceprot';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { translateBrowserLoaderFactory } from './utils/translate-browser.loader';

@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
  ],
  exports: [HttpClientModule, TranslateModule, BrowserTransferStateModule],
})
export class CoreModule {}
