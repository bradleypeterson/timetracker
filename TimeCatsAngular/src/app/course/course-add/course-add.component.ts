import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../authentication/user";
import {UserService} from "../../core/user.service";
import {CourseService} from "../../core/course.service";
import {Course} from "../../course";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  public contentSectionTitle = "Course Builder";
  public courseEditForm: FormGroup;

  public instructors: Observable<User[]>;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private courseService: CourseService) {
    this.courseEditForm = new FormGroup({
      id:             new FormControl(null),
      name:           new FormControl("New Course", [Validators.required]),
      description:    new FormControl("", [Validators.required]),
      instructor:     new FormControl(0, [Validators.required]),
      users:          new FormControl(Array(User))
    });
  }

  ngOnInit(): void {
    this.instructors = this.userService.getInstructors();
    this.userService.checkSession().subscribe((session) => {
      console.log("Valid Session: " + session);
    });
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

  courseNameHasError(): boolean {
    return this.courseEditForm.controls.name.hasError("required");
  }

  courseDescriptionHasError(): boolean {
    return this.courseEditForm.controls.description.hasError("required");
  }

  instructorHasError() {
    return this.courseEditForm.controls.instructor.hasError("required");
  }
}
