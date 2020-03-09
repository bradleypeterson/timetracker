import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../authentication/user";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private allUsersEndpoint = `${environment.apiUrl}home/getUsers`;
  private allStudentsEndpoint = `${environment.apiUrl}home/getStudents`;
  private allInstructorsEndpoint = `${environment.apiUrl}home/GetInstructors`;

  private users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject<User[]>(new Array<User>());
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersEndpoint)
      .pipe(
        catchError(this.handleError<User[]>("getUsers", []))
      );
  }

  public getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.allStudentsEndpoint)
      .pipe(
        catchError(this.handleError<User[]>("getStudents", []))
      );
  }

  public getInstructors(): Observable<User[]> {
    return this.http.get<User[]>(this.allInstructorsEndpoint)
      .pipe(
        catchError(this.handleError<User[]>("getInstructors", []))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to a remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
