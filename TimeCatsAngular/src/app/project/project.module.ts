import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {SharedModule} from "../shared/shared.module";
import {ProjectRoutingModule} from "./project-routing.module";



@NgModule({
  declarations: [
    ProjectAddComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
  ]
})
export class ProjectModule { }
