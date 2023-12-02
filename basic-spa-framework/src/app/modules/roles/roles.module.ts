import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { FormularioRolesComponent } from './components/formulario-roles/formulario-roles.component';
import { ListaRolesComponent } from './pages/lista-roles/lista-roles.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormularioRolesComponent,
    ListaRolesComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RolesModule { }
