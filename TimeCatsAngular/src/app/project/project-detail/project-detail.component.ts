import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Project} from "../../project";
import {switchMap} from "rxjs/operators";
import {ProjectService} from "../../core/project.service";
import {Group} from "../../group";
import {GroupService} from "../../group/group.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public project$: Observable<Project>;
  public groups$: Observable<Group[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.project$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.projectService.getProjectById(+params.get("id"));
      })
    );

    this.project$.subscribe(project => {
      this.groups$ = this.groupService.getGroups();
    });
  }

}
