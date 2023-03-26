import { TokenService } from 'src/app/core/services/token.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private userService: AuthService,
    private tokenService : TokenService,
    private router: Router){

  }


  Login(data)
  {
    this.userService.Login(data.userName, data.password).subscribe({
      next:(result) => {
        this.tokenService.saveToken(result);
        this.router.navigate(['/app/']);
      },
      error: () => {
        console.log("Error")
      }
    });
  }

}
