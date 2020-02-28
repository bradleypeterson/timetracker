import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseComponent} from "./course/course.component";

const routes: Routes = [
  {
    path: "",
    component: CourseComponent
  },
  {
    path: "course/:id",
    component: CourseDetailComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
