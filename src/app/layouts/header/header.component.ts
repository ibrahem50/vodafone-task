import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/pages/login/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  languages: { key: string; value: number }[] = [
    { key: 'en', value: 0 },
    { key: 'ar', value: 1 },
  ];
  currentLanguage: string = 'en';
  userData$ = new BehaviorSubject<{ userName: string; userType: number }>({
    userName: '',
    userType: 3,
  });
  constructor(private userServise: UserService) {}

  ngOnInit(): void {
    this.userData$ = this.userServise.user$;
  }

  changeLanguage(key: string) {
    this.currentLanguage = key;
  }

  logout() {
    this.userServise.logout();
  }

  track(index: number, item: { key: string; value: number }) {
    return item.value;
  }
}
