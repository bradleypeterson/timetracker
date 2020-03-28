import {Component, OnInit} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "../../course";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../../core/course.service";

@Component({
  selector: "app-instructor-dashboard",
  templateUrl: "./instructor-dashboard.component.html",
  styleUrls: ["./instructor-dashboard.component.scss"]
})
export class InstructorDashboardComponent implements OnInit {
  public courses: Observable<Course[]>;
  public displayedColumns: string[];

  constructor(private http: HttpClient,
              private courseService: CourseService) {
    this.courses = new BehaviorSubject<Course[]>([]);
    this.displayedColumns = ["courseID", "courseName", "description"];
  }

  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.courses = this.courseService.getCourses();
  }
}
