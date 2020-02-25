import {User} from "./authentication/user";
import {Identifiable} from "./identifiable";

export class Course implements Identifiable {
  courseID: number;
  courseName: string;
  instructorId: number;
  instructor?: User;
  isActive: boolean;
  description: string;
  instructorName: string;
  users?: Array<User>;

  get id(): number {
    return this.courseID;
  }
}
