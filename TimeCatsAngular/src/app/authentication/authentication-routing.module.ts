import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";

const routes: Routes = [
  //{ path: "", redirectTo: "login" },
  {path: "login", component: UserLoginComponent},
  {path: "register", component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}