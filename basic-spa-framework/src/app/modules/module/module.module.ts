import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './page/module/module.component';
import { ListaModuleComponent } from './page/lista-module/lista-module.component';
import { FormularioModuleComponent } from './component/formulario-module/formulario-module.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ModuleComponent,
    ListaModuleComponent,
    FormularioModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ModuleModule { }
