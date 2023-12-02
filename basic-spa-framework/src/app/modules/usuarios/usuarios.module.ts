import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    FormularioUsuariosComponent,
    UsuariosComponent,
    CambiarContrasenaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsuariosModule { }
