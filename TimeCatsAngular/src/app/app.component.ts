import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "TimeCats";

  constructor(private auth: AuthenticationService) {
  }

  public isAuthed(): boolean {
    return this.auth.isUserAuthenticated();
  }

  public signOut(): void {
    this.auth.logout();
  }
}
