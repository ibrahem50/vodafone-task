import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/login/services/user.service';

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
