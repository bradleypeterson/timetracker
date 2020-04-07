import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectAddComponent} from "./project-add/project-add.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectListComponent
  },
  {
    path: "project/:id",
    component: ProjectDetailComponent
  },
  {
    path: "add",
    component: ProjectAddComponent
  },
  {
    path: "course/edit/:id",
    component: ProjectEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
