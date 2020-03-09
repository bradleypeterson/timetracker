import { Component, OnInit } from "@angular/core";
import {Course} from "../../course";
import {CourseService} from "../../core/course.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  public courses: Course[];
  public courseDisplayedColumns: string[];

  constructor(private courseService: CourseService) {
    this.courseDisplayedColumns = ["courseID", "courseName", "description"];
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
}
