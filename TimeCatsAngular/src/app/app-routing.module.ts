import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {AuthenticatedRouteGuardService} from "./authentication/authenticated-route-guard.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "auth",
    loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthenticatedRouteGuardService]
  },
  {
    path: 'courses',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
    canActivate: [AuthenticatedRouteGuardService]
  },
  {
    path: "projects",
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthenticatedRouteGuardService]
  },
  {
    path: "groups",
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule),
    canActivate: [AuthenticatedRouteGuardService]
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
