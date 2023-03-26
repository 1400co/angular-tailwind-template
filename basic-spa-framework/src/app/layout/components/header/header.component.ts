import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/core/models/auth-user.model';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  userLogged:AuthUser;

  constructor(private tokenService: TokenService,
    private router: Router){

  }

  ngOnInit(): void {
    this.userLogged = this.tokenService.getToken();
    console.log("header",this.userLogged)
  }

  SignOut()
  {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
