import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate():
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<any> {
    return this.userService.user$.pipe(
      take(1),
      map((user: { userName: string; userType: number }) => {
        if (user.userType === 3) {
          return true;
        }
        return this.router.navigate(['/products']);
      })
    );
  }
}
