interface TimeCard {

}

interface UserCourse {
}

interface UserGroup {
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  type: any;
  isActive: boolean;
  timecards: TimeCard;
  userGroup: UserGroup;
  userCourse: UserCourse;
}
