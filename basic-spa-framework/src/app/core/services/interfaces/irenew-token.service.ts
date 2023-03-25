import { Observable } from "rxjs";
import { AuthUser } from "../../models/auth-user.model";

export interface IRenewtokenService {
  RenewToken(authToken: string, refreshToken:string): Observable<AuthUser>;
}
