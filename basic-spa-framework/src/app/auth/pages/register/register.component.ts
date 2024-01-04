import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UsuarioService,
    private router: Router) {

  }

  register(user: UserDto) {
    this.userService.create(user).subscribe({
      next:(result) => {

        this.router.navigate(['/login/']);
      },
      error: () => {
        console.log("Error")
       
      }
    });;
  }

}
