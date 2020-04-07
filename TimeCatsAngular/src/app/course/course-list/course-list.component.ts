import { Component, OnInit } from "@angular/core";
import {Course} from "../../course";
import {CourseService} from "../../core/course.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: "app-course",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"]
})
export class CourseListComponent implements OnInit {
  public courses: Course[];
  public courseDisplayedColumns: string[];

  constructor(private courseService: CourseService,
              private router: Router) {
    this.courseDisplayedColumns = ["courseID", "courseName", "description", "instructorId"];
  }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  onCourseSelected(course: Course) {
    this.router.navigate(["/courses/course/", course.courseID]);
  }
}
