import {Identifiable} from "../identifiable";

export class User implements Identifiable {
  userID: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  type: any;
  isActive: boolean;
  token?: string;

  get id(): number {
    return this.userID;
  }
}
