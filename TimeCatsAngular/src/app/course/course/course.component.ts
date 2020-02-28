import { Component, OnInit } from '@angular/core';
import {Course} from "../../course";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public courses: BehaviorSubject<Course[]>;
  public courseDisplayedColumns: string[];

  constructor(private http: HttpClient) {
    this.courses = new BehaviorSubject<Course[]>([]);
    this.courseDisplayedColumns = ["courseID", "courseName", "description"];
  }

  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.http.get<Course[]>(`${environment.apiUrl}home/GetCourses`)
      .subscribe((courses) => {
        this.courses.next(courses);
      });
  }
}
