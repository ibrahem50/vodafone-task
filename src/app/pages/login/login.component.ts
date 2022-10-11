import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  userData: { userName: string; password: string } = {
    userName: '',
    password: '',
  };
  errorMessage: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    this.errorMessage = false;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.userData = this.loginForm.value;
      this.userService
        .getUser({
          userName: this.userData.userName,
          password: this.userData.password,
        })
        .subscribe((res) => {
          if (res.userType == 3) {
            this.errorMessage = true;
          } else {
            this.router.navigate(['/']);
          }
        });
    }
  }
}
