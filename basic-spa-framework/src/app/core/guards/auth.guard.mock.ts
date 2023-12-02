import { PermisosDto } from '../models/permisos-dto';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Observable, map, catchError, of } from 'rxjs';
import { IAuthGuard } from './interfaces/iauth.guard';


@Injectable({ providedIn: 'root' })
export class AuthGuardMock implements IAuthGuard {
  constructor(private tokenService: TokenService,
    private router: Router) { }

  permisos: PermisosDto[]
  home: string = "home";

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(true);
  }
}



