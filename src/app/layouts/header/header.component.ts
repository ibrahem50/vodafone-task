import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/pages/login/services/user.service';
import { DOCUMENT } from '@angular/common';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  locales = ['en', 'ar'];
  languages: { key: string; value: number }[] = [
    { key: 'en', value: 0 },
    { key: 'ar', value: 1 },
  ];
  currentLanguage: string = 'en';
  userData$ = new BehaviorSubject<{ userName: string; userType: number }>({
    userName: '',
    userType: 3,
  });
  constructor(
    private userServise: UserService,
    private translateService: TranslateService,
    private langService: LanguageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.currentLanguage = this.translateService.currentLang;
  }

  ngOnInit(): void {
    this.userData$ = this.userServise.user$;
  }

  changeLanguage(key: string) {
    this.currentLanguage = key;
    this.translateService.use(key);
    this.directionChanged(key);
    // if i had more time i will use service like ngx-translate-router to save lang
    this.langService.$lang.next(key);
  }

  logout() {
    this.userServise.logout();
  }

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'ar' ? 'rtl' : 'ltr';
    htmlTag.lang = dir === 'ar' ? 'ar' : 'en';
  }

  track(index: number, item: { key: string; value: number }) {
    return item.value;
  }
}
