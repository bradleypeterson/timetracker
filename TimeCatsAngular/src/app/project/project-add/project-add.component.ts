import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {
  public contentSectionTitle = "Create New Project";
  projectAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectAddForm = new FormGroup({
      name:                 new FormControl("New Project", [Validators.required]),
      description:          new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  createProject() {

  }

  getName(): string {
    return this.projectAddForm.controls.name.value;
  }

  getDescription(): string {
    return this.projectAddForm.controls.description.value;
  }

  getCourseName(): string {
    return "Course 1";
  }
}
