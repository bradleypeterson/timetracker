import {Component, OnInit} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Course} from "../course";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-instructor-dashboard",
  templateUrl: "./instructor-dashboard.component.html",
  styleUrls: ["./instructor-dashboard.component.scss"]
})
export class InstructorDashboardComponent implements OnInit {
  public courses: BehaviorSubject<Course[]>;
  public displayedColumns: string[];

  constructor(private http: HttpClient) {
    this.courses = new BehaviorSubject<Course[]>([]);
    this.displayedColumns = ["courseID", "courseName", "description"];
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
