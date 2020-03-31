import {Identifiable} from "./identifiable";
import {Course} from "./course";

export class Project implements Identifiable {
  projectID: number;
  projectName: string;
  isActive: boolean;
  description: string;
  courseID: number;
  course: Course;

  get id(): number {
    return this.projectID;
  }
}
