import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../authentication/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  public contentSectionTitle = "Course Builder";
  public courseEditForm: FormGroup;

  constructor(private http: HttpClient) {
      this.courseEditForm = new FormGroup({
        id:             new FormControl(null),
        name:           new FormControl("New Course", [Validators.required]),
        description:    new FormControl("", [Validators.required]),
        instructor:     new FormControl(null, [Validators.required]),
        users:          new FormControl(Array(User))
    });
  }

  ngOnInit(): void {
  }

  getId(): string {
    return this.courseEditForm.controls.id.value;
  }

  getName(): string {
    return this.courseEditForm.controls.name.value;
  }

  getDescription() {
    return this.courseEditForm.controls.description.value;
  }

  getInstructors(): Observable<User[]> {
    let output = this.http.get<User[]>(`${environment.apiUrl}home/GetInstructors`);

    output.subscribe((instructor) => {
      console.log(instructor);
    });

    return output;
  }
}
