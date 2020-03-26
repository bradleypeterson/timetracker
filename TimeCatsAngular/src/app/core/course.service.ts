import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "../course";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {User} from "../authentication/user";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  private allCoursesEndpoint = `${environment.apiUrl}home/GetCourses`;
  private singleCourseEndpoint = `${environment.apiUrl}home/GetCourse`;
  private addCourseEndpoint = `${environment.apiUrl}home/AddCourse`;
  private getUsersForCourse = `${environment.apiUrl}home/GetUsersForCourse`;

  constructor(private http: HttpClient,
              private router: Router) {  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.allCoursesEndpoint);
  }

  public getCourseById(id: number): Observable<Course> {
    const getParams = new HttpParams().set("id", id.toString());

    return this.http.get<Course>(this.singleCourseEndpoint, { params: getParams });
  }

  public getUsersInCourse(id: number): Observable<User[]> {
    return this.http.post<User[]>(this.getUsersForCourse, { courseId: id });
  }

  public addCourse(course: Course): void {
    this.http.post<number>(this.addCourseEndpoint, course)
      .subscribe(createdCourse => {
        this.router.navigate(["/courses/course/", createdCourse]);
      });
  }
}
