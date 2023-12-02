// src/app/mocks/user.service.mock.ts
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';
import { IAuthService } from './interfaces/iauth.service';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { ResponseLogin } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { checkToken } from '../Interceptor/token-interceptor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible en toda la aplicación
})

export class AuthService implements IAuthService {

  mockUser: AuthUser = { id:'1', name:'Oscar Rueda', email:'usuario@yopmail.com', avatar:'', authToken:'token_123', refreshToken: 'refresh_123' };

  apiUrl = environment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient,
    private tokenService: TokenService){

  }
  // Login(username: string, password: string): Observable<ResponseLogin> {
  //   throw new Error('Method not implemented.');
  // }

  Login(user: string, password: string): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/token`, {
      user,
      password
    })
    .pipe(
      tap(response => {
        
        this.tokenService.saveToken(response.authToken);
        this.tokenService.saveRefreshToken(response.refreshToken);
        this.tokenService.saveTokenId(response.userId)
        this.tokenService.saveTokenUserName(response.userName)
        this.tokenService.savePermisos(response.permisos)
      })
    );
  }

  getDataUser() {
    return this.user$.getValue();
  }

  getProfile() {
    return this.http.get<User>(`${this.apiUrl}/Auth/me`, { context: checkToken() })
    .pipe(
      tap(user => {
        //console.log("logeado", user)
        this.user$.next(user);
      })
    );
  }

}
