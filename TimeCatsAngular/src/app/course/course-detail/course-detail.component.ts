import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CourseService} from "../../core/course.service";
import {Course} from "../../course";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "../../authentication/user";
import {ProjectService} from "../../core/project.service";
import {Project} from "../../project";
import {ContentSectionButton} from "../../shared/content-section/content-section-button";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.scss"]
})
export class CourseDetailComponent implements OnInit {
  public course$: Observable<Course>;
  public users$: Observable<User[]>;
  public projects$: Observable<Project[]>;

  public userInfo = [
    'userID',
    'username'
  ];

  public projectInfo = [
    'projectID',
    'projectName',
    'description',
    'isActive'
  ];
  addProjectButton: ContentSectionButton;
  addUsersButton: ContentSectionButton;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private projectService: ProjectService,
              private router: Router) {
    this.addProjectButton = new ContentSectionButton("Add Project", null, (event) => {
      router.navigate(["projects/add"]);
    }, "blue", null, false);

    this.addUsersButton = new ContentSectionButton("Invite User", null, (event) => {
      router.navigate(["courses/invite-user"]);
    }, "", null, false);
  }

  ngOnInit(): void {
    this.course$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => this.courseService.getCourseById(+params.get("id")))
    );

    this.course$.subscribe(course => {
      this.users$ = this.courseService.getUsersInCourse(course.courseID);
    });

    this.course$.subscribe(course => {
      this.projects$ = this.projectService.getProjectsInCourse(course.courseID);
    });
  }

  onProjectSelected(project: Project) {
    this.router.navigate(["/projects/project/", project.projectID]);
  }
}
