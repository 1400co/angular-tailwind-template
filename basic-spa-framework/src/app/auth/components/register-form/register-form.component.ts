import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  form: FormGroup;
  @Output() register= new EventEmitter();

  constructor()
  {
    this.form = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]), // Asume una longitud mínima
      confirmPassword: new FormControl('', Validators.required),
      fechaCreacion: new FormControl({value: '', disabled: true})
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password').value;
    const confirmPassword = fg.get('confirmPassword').value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  Login() {
    if (this.form.valid) {
      // Aquí manejas la lógica de inicio de sesión
      this.register.emit(this.form.value);
    }
  }

}
