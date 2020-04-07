import { Injectable } from '@angular/core';
import {Project} from "../project";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private getAllProjectsEndpoint = `${environment.apiUrl}home/GetProjectsInCourse`;
  private getProjectByIdEndpoint = `${environment.apiUrl}home/GetProjectById`;

  constructor(private http: HttpClient) { }

  getProjectsInCourse(courseId: number): Observable<Project[]> {
    const getParams = new HttpParams().set("id", courseId.toString());
    return this.http.get<Project[]>(this.getAllProjectsEndpoint, { params: getParams });
  }

  getProjectById(number: number): Observable<Project> {
    const getParams = new HttpParams().set("id", number.toString());
    return this.http.get<Project>(this.getProjectByIdEndpoint, { params: getParams });
  }
}
