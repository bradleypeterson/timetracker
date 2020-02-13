import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
