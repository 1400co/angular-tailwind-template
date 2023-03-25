import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../models/auth-user.model';
import { RenewTokenService } from './renew-token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  apiUrl = environment.API_URL;

  constructor(private renewTokenService: RenewTokenService) { }

  saveToken(token: AuthUser) {
    setCookie('oruedar-token', JSON.stringify(token), { expires: 365, path: '/' });
  }

  getToken(): AuthUser {
    const token = getCookie('oruedar-token');
    return JSON.parse(token) as AuthUser;
  }

  removeToken() {
    removeCookie('oruedar-token');
  }


  isValidToken() {
    const userLogged = this.getToken();
    if (!userLogged) {
      return false;
    }

    const decodeToken = jwt_decode<JwtPayload>(userLogged.authToken);
    if (decodeToken && decodeToken?.exp) {
       const expirationTime = new Date(decodeToken.exp * 1000);
       const today = new Date();
       return expirationTime > today;
     }
     return false;
  }

  refreshToken() {

    const userLogged = this.getToken();

    this.renewTokenService.RenewToken(userLogged.authToken, userLogged.refreshToken)
      .pipe(
        tap(response => {
          this.saveToken(response);
        }),
        catchError(error => {
          console.log('Token was not renewed', error);
          this.removeToken();
          return of([]);
        })
      );
  }



}
