import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseRoutingModule } from "./course-routing.module";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CourseEditComponent } from './course-edit/course-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { CourseAddComponent } from './course-add/course-add.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseEditComponent,
    CourseAddComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
