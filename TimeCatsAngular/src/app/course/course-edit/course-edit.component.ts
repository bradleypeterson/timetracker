import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../authentication/user";
import {Observable} from "rxjs";
import {CourseService} from "../../core/course.service";
import {Course} from "../../course";
import {UserService} from "../../core/user.service";

@Component({
  selector: "app-course-edit",
  templateUrl: "./course-edit.component.html",
  styleUrls: ["./course-edit.component.scss"]
})
export class CourseEditComponent implements OnInit {
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
