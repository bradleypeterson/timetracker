import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "../course";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  private allCoursesEndpoint = `${environment.apiUrl}home/GetCourses`;
  private addCourseEndpoint = `${environment.apiUrl}home/AddCourse`;

  constructor(private http: HttpClient) {  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.allCoursesEndpoint);
  }

  public addCourse(course: Course): void {
    this.http.post(this.addCourseEndpoint, course).subscribe();
  }
}
