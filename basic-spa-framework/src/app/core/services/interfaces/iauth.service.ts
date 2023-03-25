import { Observable } from "rxjs";
import { AuthUser } from "../../models/auth-user.model";

export interface IAuthService {
  Login(username: string, password:string): Observable<AuthUser>;
}
