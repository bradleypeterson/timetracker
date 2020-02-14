export interface User {
  userID: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  type: any;
  isActive: boolean;
  token?: string;
}
