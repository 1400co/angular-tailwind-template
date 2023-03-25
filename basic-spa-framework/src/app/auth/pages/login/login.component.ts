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
    private router: Router){

  }


  Login(data)
  {
    const { email, password } = data.getRawValue();
    this.userService.Login(email, password).subscribe({
      next:(result) => {
        console.log(result);
        this.router.navigate(['/dashboard/']);
      },
      error: () => {
        console.log("Error")
      }
    });
  }

}
