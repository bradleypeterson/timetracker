import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../core/course.service";
import {Course} from "../../course";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "../../authentication/user";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.scss"]
})
export class CourseDetailComponent implements OnInit {
  public course$: Observable<Course>;
  public users$: Observable<User[]>;

  public userInfo = [
    'userID',
    'username'
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.course$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => this.courseService.getCourseById(+params.get("id")))
    )

    this.course$.subscribe(course => {
      this.users$ = this.courseService.getUsersInCourse(course.id);
    })
  }
}
