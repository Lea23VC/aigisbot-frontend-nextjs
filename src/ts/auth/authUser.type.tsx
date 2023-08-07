import { User } from '../user/user.type';

export type AuthUser = {
  user: User;
  token: string;
};
