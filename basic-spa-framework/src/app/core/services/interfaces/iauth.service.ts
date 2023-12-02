import { Observable } from "rxjs";
import { ResponseLogin } from "../../models/auth.model";

export interface IAuthService {
  Login(username: string, password:string): Observable<ResponseLogin>;
}
