import {User} from "./app/authentication/user";

export interface Course {
  courseID: number;
  courseName: string;
  instructorId: number;
  instructor?: User;
  isActive: boolean;
  description: string;
  instructorName: string;
  users?: Array<User>;
}
