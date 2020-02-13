import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.scss"]
})
export class UserRegistrationComponent implements OnInit {
  public registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      passwordFirst: new FormControl("", [Validators.required]),
      passwordSecond: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public attemptRegister(): void {
    return;
  }

  usernameHasError() {

  }

  passwordFirstHasError() {

  }

  passwordSecondHasError() {

  }
}
