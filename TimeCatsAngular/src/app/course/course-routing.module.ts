import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";
import {CourseAddComponent} from "./course-add/course-add.component";

const routes: Routes = [
  {
    path: "",
    component: CourseListComponent
  },
  {
    path: "course/:id",
    component: CourseDetailComponent,
  },
  {
    path: "add",
    component: CourseAddComponent
  },
  {
    path: "course/edit/:id",
    component: CourseEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
