import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseRoutingModule } from "./course-routing.module";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import {CourseComponent} from "./course/course.component";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CourseEditComponent } from './course-edit/course-edit.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [CourseComponent, CourseDetailComponent, CourseEditComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CourseModule { }
