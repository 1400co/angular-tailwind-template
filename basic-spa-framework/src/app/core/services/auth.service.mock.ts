// src/app/mocks/user.service.mock.ts
import { Observable, of } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { IAuthService } from './interfaces/iauth.service';
import { ResponseLogin } from '../models/auth.model';

export class AuthServiceMock implements IAuthService {

  mockUser: AuthUser = { id:'1', name:'Sancho Panza', email:'usuario@yopmail.com', avatar:'', authToken:'token_123', refreshToken: 'refresh_123' };
  mockResponse: ResponseLogin = { authToken:'', refreshToken:'', userId:0, userName : '', permisos:[] };

  Login(username: string, password:string): Observable<ResponseLogin> {
    debugger
    return of(this.mockResponse);

  }

}
