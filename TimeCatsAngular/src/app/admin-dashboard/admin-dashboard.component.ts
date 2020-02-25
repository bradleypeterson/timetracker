import {Component, OnInit} from "@angular/core";
import {Course} from "../../course";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
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
