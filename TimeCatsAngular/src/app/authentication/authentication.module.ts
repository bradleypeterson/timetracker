import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticatedRouteGuardService} from "./authenticated-route-guard.service";

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    AuthenticatedRouteGuardService
  ]
})
export class AuthenticationModule { }
