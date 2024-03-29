import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../models/auth.model';
import { PermisosDto } from '../models/permisos-dto';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  savePermisos(token: PermisosDto[]) {

    const tokenString = JSON.stringify(token);
    setCookie('spa-permisos', tokenString,{ expires: 365, path: '/' });
  }

  getPermisos(): PermisosDto[] {
    const tokenString = getCookie('spa-permisos');
    if (tokenString) {
      return JSON.parse(tokenString);
    }
    return null;
  }

  saveToken(token: string) {
    setCookie('spa-token', token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie('spa-token');
    return token;
  }

  removeToken() {
    removeCookie('spa-token');
  }

  saveRefreshToken(token?: string) {
    setCookie('refresh-spa-token', token, { expires: 365, path: '/' });
  }

  getRefreshToken() {
    const token = getCookie('refresh-spa-token');
    return token;
  }

  removeRefreshToken() {
    removeCookie('refresh-spa-token');
  }

  saveTokenId(token: number) {
    setCookie('spa-tokenId', token, { expires: 365, path: '/' });
  }

  getTokenId() {
    const token = getCookie('spa-tokenId');
    return token;
  }

  removeTokenId() {
    removeCookie('spa-tokenId');
  }

  saveTokenUserName(token: string) {
    setCookie('spa-token-UserName', token, { expires: 365, path: '/' });
  }

  getTokenUserName() {
    const token = getCookie('spa-token-UserName');
    return token;
  }

  removeTokenUserName() {
    removeCookie('spa-token-UserName');
  }

  isValidToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded && decoded.exp) {
       const expirationTime = new Date(decoded.exp * 1000);
       const today = new Date();
       return expirationTime > today;
     }
     return false;
  }

  isValidRefreshToken() {
    const token = this.getRefreshToken();
    if (!token) {
      return false;
    }

    return true;
  }

removeAllTokens(){
        this.removeToken();
        this.removeRefreshToken();
        this.removeTokenId();
        this.removeTokenUserName();
}

  refreshToken() {

    const accessToken = this.getToken();
    const  refreshToken = this.getRefreshToken();

    return this.http.post<ResponseLogin>(`${this.apiUrl}Token/RenewToken`, {
      accessToken,
      refreshToken
    })
    .pipe(
      tap(response => {
        this.saveToken(response.authToken);
        this.saveRefreshToken(response.refreshToken);
      }),
      catchError(error => {
        console.log('Ha ocurrido un error:', error);
        this.removeAllTokens();
        return of([]);
      })
    );

  }

}


