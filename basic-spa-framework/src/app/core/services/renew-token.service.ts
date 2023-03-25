// src/app/mocks/user.service.mock.ts
import { Observable, of } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';

export class RenewTokenService  {

  mockUser: AuthUser = { id:'1', name:'Oscar Rueda', email:'usuario@yopmail.com', avatar:'', authToken:'token_123', refreshToken: 'refresh_123' };

  RenewToken(authToken: string, refreshToken:string): Observable<AuthUser> {
    //TODO: perform implementation.
    return of(this.mockUser);
  }

}
