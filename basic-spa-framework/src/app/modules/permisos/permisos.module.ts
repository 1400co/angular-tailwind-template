import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { FormularioPermisosComponent } from './components/formulario-permisos/formulario-permisos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaPermisosComponent } from './pages/lista-permisos/lista-permisos.component';


@NgModule({
  declarations: [
    ListaPermisosComponent,
    PermisosComponent,
    FormularioPermisosComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PermisosModule { }
