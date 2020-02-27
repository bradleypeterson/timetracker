import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"]
})
export class UserDashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  public getUserType(): string {
    return this.auth.currentUserValue.type.toString();
  }

}
