import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { PasswordRecoveryFormComponent } from './components/password-recovery-form/password-recovery-form.component';
import { NewPasswordFormComponent } from './components/new-password-form/new-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPasswordComponent } from './pages/new-password/new-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PasswordRecoveryFormComponent,
    NewPasswordFormComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
