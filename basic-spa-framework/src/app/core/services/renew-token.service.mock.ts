// src/app/mocks/user.service.mock.ts
import { Observable, of } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { ResponseLogin } from '../models/auth.model';

export class RenewTokenServiceMock  {

  mockUser: AuthUser = { id:'1', name:'Sancho Panza', email:'usuario@yopmail.com', avatar:'', authToken:'token_123', refreshToken: 'refresh_123' };
  mockResponse: ResponseLogin = { authToken:'', refreshToken:'', userId:0, userName : '', permisos:[] };

  RenewToken(authToken: string, refreshToken:string): Observable<ResponseLogin> {
    //TODO: perform implementation.
    return of(this.mockResponse);
  }

}
