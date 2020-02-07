import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(String, [Validators.required]),
      password: new FormControl(String, [Validators.required])
    });
  }

  ngOnInit() {
  }

  public attemptLogin(): void {
    console.log(this.loginForm.value);
  }
}
