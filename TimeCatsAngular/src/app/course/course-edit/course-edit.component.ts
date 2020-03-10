import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../authentication/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {CourseService} from "../../core/course.service";
import {Course} from "../../course";
import {UserService} from '../../core/user.service';

@Component({
  selector: "app-course-edit",
  templateUrl: "./course-edit.component.html",
  styleUrls: ["./course-edit.component.scss"]
})
export class CourseEditComponent implements OnInit {
  public contentSectionTitle = "Course Builder";
  public courseEditForm: FormGroup;

  public instructors: Observable<User[]>;

  constructor(private userService: UserService,
              private courseService: CourseService) {
      this.courseEditForm = new FormGroup({
        id:             new FormControl(null),
        name:           new FormControl("New Course", [Validators.required]),
        description:    new FormControl("", [Validators.required]),
        instructor:     new FormControl(null, [Validators.required]),
        users:          new FormControl(Array(User))
    });
  }

  ngOnInit(): void {
    this.instructors = this.userService.getInstructors();
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

  createCourse(): void {
    const course = new Course();

    course.courseName = this.courseEditForm.controls.name.value;
    course.description = this.courseEditForm.controls.description.value;
    course.instructorId = this.courseEditForm.controls.instructor.value;

    this.courseService.addCourse(course);
  }
}
