import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../models/auth.model';
import { PermisosDto } from '../models/permisos-dto';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  savePermisos(token: PermisosDto[]) {
   
    const tokenString = JSON.stringify(token);
    setCookie('tran-arbo-permisos', tokenString,{ expires: 365, path: '/' });
  }

  getPermisos(): PermisosDto[] {
    const tokenString = getCookie('tran-arbo-permisos');
    if (tokenString) {
      return JSON.parse(tokenString);
    }
    return null;
  }

  saveToken(token: string) {
    setCookie('tran-arbo-token', token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie('tran-arbo-token');
    return token;
  }

  removeToken() {
    removeCookie('tran-arbo-token');
  }

  saveRefreshToken(token?: string) {
    setCookie('refresh-tran-arbo-token', token, { expires: 365, path: '/' });
  }

  getRefreshToken() {
    const token = getCookie('refresh-tran-arbo-token');
    return token;
  }

  removeRefreshToken() {
    removeCookie('refresh-tran-arbo-token');
  }

  saveTokenId(token: number) {
    setCookie('tran-arbo-tokenId', token, { expires: 365, path: '/' });
  }

  getTokenId() {
    const token = getCookie('tran-arbo-tokenId');
    return token;
  }

  removeTokenId() {
    removeCookie('tran-arbo-tokenId');
  }

  saveTokenUserName(token: string) {
    setCookie('tran-arbo-token-UserName', token, { expires: 365, path: '/' });
  }

  getTokenUserName() {
    const token = getCookie('tran-arbo-token-UserName');
    return token;
  }

  removeTokenUserName() {
    removeCookie('tran-arbo-token-UserName');
  }

  isValidToken() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if (decodeToken && decodeToken?.exp) {
       const expirationTime = new Date(decodeToken.exp * 1000);
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
