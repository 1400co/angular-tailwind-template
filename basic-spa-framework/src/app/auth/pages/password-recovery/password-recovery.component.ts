import { Component } from '@angular/core';
import { PasswordRecovery } from 'src/app/core/models/password-recovery';
import { PasswordRecoverService } from 'src/app/core/services/password-recovery.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {

  Error:string;
  Success:string;

  constructor(private passRecovery: PasswordRecoverService){

  }

  recoverPassword(data)
  {
    console.log("aqui")
    this.passRecovery.create(data).subscribe({
      next:(result) => {
        this.Success = "Check Your Email";
        this.Error ="";
      },
      error: () => {
        console.log("Error")
        this.Error = "Something went wrong";
        this.Success = "";
      }
    });
  }
}
