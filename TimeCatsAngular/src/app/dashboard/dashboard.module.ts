import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import {InstructorDashboardComponent} from "./instructor-dashboard/instructor-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    UserDashboardComponent,
    StudentDashboardComponent,
    InstructorDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
