import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { UserService } from 'src/app/pages/login/services/user.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Store';
  loading: boolean = false;

  constructor(private userService: UserService) {
    this.userService.autoLogin();
  }

  ngOnInit() {}
}
