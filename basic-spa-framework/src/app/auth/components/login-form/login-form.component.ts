import { AuthService } from './../../../core/services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  form:FormGroup;
  @Output() login= new EventEmitter();

  constructor( private formbuilder:FormBuilder ){
    this.BuildForm();
  }

  private BuildForm(){
    this.form = this.formbuilder.group({
      user:['', [Validators.required]],
      password:['', [Validators.required]],
    })
  }

  Login()
  {
    this.login.emit(this.form.value);
  }
}
