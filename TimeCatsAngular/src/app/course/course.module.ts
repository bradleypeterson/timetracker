import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseRoutingModule } from "./course-routing.module";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import {CourseComponent} from "./course/course.component";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [CourseComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CourseModule { }
