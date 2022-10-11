import { BehaviorSubject, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<{ userName: string; userType: number }>({
    userName: '',
    userType: 3,
  });
  constructor(private router: Router) {}

  getUser(user: UserModel): Observable<{ userName: string; userType: number }> {
    switch (user.userName.toLowerCase()) {
      case 'admin':
        this.user$.next({ userName: user.userName, userType: 1 });
        localStorage.setItem(
          'userInfo',
          JSON.stringify({ userName: user.userName, userType: 1 })
        );
        break;
      case 'user':
        this.user$.next({ userName: user.userName, userType: 2 });
        localStorage.setItem(
          'userInfo',
          JSON.stringify({ userName: user.userName, userType: 2 })
        );
        break;
      default:
        this.user$.next({ userName: user.userName, userType: 3 });
        localStorage.setItem(
          'userInfo',
          JSON.stringify({ userName: user.userName, userType: 3 })
        );
        break;
    }
    return this.user$;
  }

  logout() {
    this.user$.next({ userName: '', userType: 3 });
    this.router.navigate(['/login']);
    localStorage.removeItem('userInfo');
  }

  autoLogin() {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      let user = JSON.parse(userInfo);
      if (user.userType != 3) {
        this.user$.next({ userName: user.userName, userType: user.userType });
      } else {
        this.user$.next({ userName: '', userType: 3 });
      }
    }
  }
}
