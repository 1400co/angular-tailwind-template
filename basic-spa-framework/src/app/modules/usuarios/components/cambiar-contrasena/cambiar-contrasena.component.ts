import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { RequestStatus } from 'src/app/core/models/request-status.model';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})

export class CambiarContrasenaComponent {

  form: FormGroup;
  statusDetail: RequestStatus = 'init';


  @Input()
  set usuario(data: UserDto) {
    if (data) {

      this.form.patchValue({ userId: data.id });
      this.form.patchValue({ userName: data.userName });
      this.form.markAllAsTouched();//must
    }
  };

  /*Codigo para Modal*/
  @Input() showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  cerrarModal(data) {
    this.showModal = data;
  }
  /* Fin Codigo para Modal*/

  constructor(private formbuilder: FormBuilder,
    private securityService: SecurityService,
    private router: Router) {
    this.BuildForm();
  }

  CambiarContrasena() {
    this.securityService.update(this.userIdField, this.form.value).subscribe(
      (data) => {
        this.statusDetail = 'success';
      },
      (errorMsg) => {
        this.statusDetail = 'error';
      }
    );
  }

  private BuildForm() {
    this.form = this.formbuilder.group({
      userId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get isFormInValid() {
    return this.form.invalid && this.form.touched;
  }

  get userIdField(): string {
    return this.form.get('userId').value;
  }

  get passwordField() {
    return this.form.get('password');
  }

  get isPasswordFieldValid() {
    return this.passwordField.touched && this.passwordField.valid;
  }

  get userNameField() {
    return this.form.get('userName');
  }

  get isUserNameFieldValid() {
    return this.userNameField.touched && this.userNameField.valid;
  }

}
