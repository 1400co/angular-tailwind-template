import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(
    private router: Router) {}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log("ActivatedRouteSnapshot", route)
    console.log("RouterStateSnapshot", state)
    console.log(state.url) //Check permissions with this

    // if (true) {
    //   this.router.navigate(['/login/']);
    //   return false;
    // }
    return true;
  }

}
