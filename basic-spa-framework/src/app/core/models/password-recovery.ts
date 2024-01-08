import { User } from "./user.model";

export interface PasswordRecovery {
  id: string; 
  userName: string;
  passwordRecoveryToken: string;
  expiryDate: Date;
  userId: string;
  user: User;
}
