import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AuthenticatedRouteGuardService} from "./authentication/authenticated-route-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: "dashboard", component: UserDashboardComponent, canActivate: [ AuthenticatedRouteGuardService ] },
  { path: "error", component: ErrorComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
