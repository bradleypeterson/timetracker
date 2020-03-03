import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseComponent} from "./course/course.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";

const routes: Routes = [
  {
    path: "",
    component: CourseComponent
  },
  {
    path: "course/:id",
    component: CourseDetailComponent,
  },
  {
    path: "add",
    component: CourseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
