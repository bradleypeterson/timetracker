import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const routes: Routes = [
  {path: "", component: UserLoginComponent},
  {path: "register", component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
