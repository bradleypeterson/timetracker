import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

  public attemptLogin(): void {
    const username = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;
    this.auth.login(username, password).subscribe((user: User) => {
      if (user.userID) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public usernameHasError(): boolean {
    return this.loginForm.controls.username.hasError("required");
  }

  public passwordHasError(): boolean {
    return this.loginForm.controls.password.hasError("required");
  }
}
