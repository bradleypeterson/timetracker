import {Component, OnInit} from "@angular/core";
import {Course} from "../../course";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {User} from "../../authentication/user";
import {CourseService} from "../../core/course.service";
import {UserService} from "../../core/user.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
  public courses: BehaviorSubject<Course[]>;
  public courseDisplayedColumns: string[];
  public instructors: BehaviorSubject<User[]>;
  public instructorDisplayedColumns: string[];

  constructor(private courseService: CourseService,
              private userService: UserService) {
    this.courses = new BehaviorSubject<Course[]>([]);
    this.courseDisplayedColumns = ["courseID", "courseName", "description"];
    this.instructors = new BehaviorSubject<User[]>([]);
    this.instructorDisplayedColumns = ["userID", "firstName", "lastName", "isActive"];
  }

  ngOnInit(): void {
    this.getCourses();
    this.getInstructors();
  }

  public getCourses(): void {
    this.courseService.getCourses()
      .subscribe((courses) => {
        this.courses.next(courses);
      });
  }

  public getInstructors(): void {
    this.userService.getInstructors()
      .subscribe((users) => {
        this.instructors.next(users);
      });
  }
}
